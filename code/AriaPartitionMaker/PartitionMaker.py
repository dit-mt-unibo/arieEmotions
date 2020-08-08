import math
import random
from enum import IntEnum


class Emotions(IntEnum):
    Amore = 0
    Gioia = 1
    Ammirazione = 2
    Rabbia = 3
    Tristezza = 4
    Paura = 5
    Nessuna = 6


class Aria:

    def __init__(self):
        self.frequencies = [0] * len(Emotions)
        self.start = 0
        self.end = 0

    def length(self):
        return self.end - self.start + 1


class AriaSet:
    # a list of Aria objects
    # frequencies
    # verses , count of, to compute probability/frequency
    discount = 1 / 100000

    def __init__(self):
        self.verses = 0
        self.frequencies = [0] * len(Emotions)
        self.arias = []

    def add(self, aria):
        for i in range(len(aria.frequencies)):
            self.frequencies[i] += aria.frequencies[i]
        self.verses += aria.length()
        self.arias.append(aria)

    def similarity(self, other):
        kl = 0.0
        for i in range(len(self.frequencies)):
            p = self.frequencies[i] / self.verses + self.discount
            q = other.frequencies[i] / other.verses + self.discount
            # kl += FreqTrain(x) * LN(FreqTrain(x) / FreqTest(x))
            kl += p * math.log(p / q)
        return kl

    def write(self, filename, lines):
        f = open(filename, "w")
        for a in self.arias:
            for l in range(a.start, a.end + 1):
                f.write(lines[l])
        print("Written ", filename)


class Partition:

    def __init__(self, ariaset, size_train, size_dev, size_test):
        self.train = AriaSet()
        self.dev = AriaSet()
        self.test = AriaSet()
        self.similarity = 0.0  # KL(train, dev) + KL(train, test)
        # ignore size_train, it will contain all the remainder
        random.shuffle(ariaset.arias)
        verseCount = 0
        for i in range(len(ariaset.arias)):
            if verseCount < size_dev:
                self.dev.add(ariaset.arias[i])
            elif verseCount < size_dev + size_test:
                self.test.add(ariaset.arias[i])
            else:
                self.train.add(ariaset.arias[i])
            verseCount += ariaset.arias[i].length()
        self.compute_similarity()

    def compute_similarity(self):
        self.similarity = self.train.similarity(self.dev) + self.train.similarity(self.test)

    def write(self, basefilename, lines):
        self.dev.write(basefilename + "_dev.tsv", lines)
        self.test.write(basefilename + "_test.tsv", lines)
        self.train.write(basefilename + "_train.tsv", lines)


# main program

def read_arias(filename):
    global lines
    allArias = AriaSet()
    nessuna = "Nessuna / Non so"
    currentId = None
    inprogress = None
    index = 0
    with open(filename) as f:
        lines = f.readlines()
    for line in lines:
        # ID, Verso, Emozione, Fiducia, Commenti
        verseParts = line.split("\t")
        # ZAP1590034_00 Dovrei... Ma no..Paura       totalmente sicura
        # ensure we have 4 columns / parts:
        if len(verseParts) < 4:
            f"oops! didnt'expect this. Line was:\n{line}"
            break
        ariaId = verseParts[0][0:-3]
        if ariaId != currentId:
            if currentId != None:
                inprogress.end = index - 1  # previous verse was the last one.
                allArias.add(inprogress)
            # else there was no previous aria, start now.
            inprogress = Aria()  # start new one
            inprogress.start = index
            currentId = ariaId
        # else nothing to do..

        emozioneId = Emotions.Nessuna
        if (verseParts[2] != nessuna) and (len(verseParts[2]) > 0):
            emozioneId = Emotions[verseParts[2]]
        inprogress.frequencies[emozioneId] += 1
        index += 1
    return allArias


def main():
    fileName = "C:\\Users\\fede9\\source\\repos\\arieEmotions\\data\\annotation\\arie_testi_full.tsv"
    outfileBaseName = "ariaset"
    arias = read_arias(fileName)
    partitions = 1000
    size_train = 2500
    size_dev = 250
    size_test = 250

    minDivergence = 2
    minDivergencePart = 0
    parts = [Partition]
    for i in range(partitions):
        part = Partition(arias, size_train, size_dev, size_test)
        parts.append(part)
        if part.similarity < minDivergence:
            minDivergence = part.similarity
            minDivergencePart = i

    # output partition with smaller divergence (max similarity)
    print(f"partition with max similarity is {minDivergencePart}, similarity={minDivergence}")
    # output to files the actual partition:
    parts[minDivergencePart].write(outfileBaseName, lines)


if __name__ == "__main__":
    main()
