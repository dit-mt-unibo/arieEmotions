====== Arie ======

The main objective of this project is exploring the possibilities of employing ML techniques to enrich the information and metadata available for a number of //opera arie// in Italian.

===== Emotions at the verse level =====

**Objective**. Building a multi-class model that, given a verse (in the context of an [[https://en.wikipedia.org/wiki/Aria|aria]], determines the expressed emotion. 

==== Background ====

Arie are relatively short short documents, consisting of sets of verses. Currently, we have around 20k such verses in Italian, from various periods (e.g., 17th, 18th century), none of which is annotated (other than standard NLP preprocessing, such as coreNLP-derived tokenisation, POST, NER).

The idea would be to manually annotate a subset of them (approx. 5k) and train a model to classify the rest. Active learning and other strategies to end up with high-quality annotations sounds like a reasonable alternative.

The classes we aim at consider at this stage are 7 (the definitions come from the Italian Wikipedia/Wiktionary):
  - **Amore**. Forte sentimento che si esprime in attrazione interpersonale ed attaccamento, una dedizione appassionata tra persone oppure, nel suo significato esteso, l'inclinazione profonda nei confronti di qualche cosa.
  - **Gioia**. Stato d'animo (emozione) positivo di chi ritiene soddisfatti tutti i propri desideri.
  - **Ammirazione**. Valutazione positiva per qualcuno, per quanto pensa, dice e fa, alta considerazione per il suo comportamento.
  - **Rabbia** (Odio?). Sentimento umano che si esprime in una forte avversione o una profonda antipatia.
  - **Tristezza**. Un'emozione contraria alla gioia e alla felicità (!)
  - **Paura**. Emozione primaria di difesa, provocata da una situazione di pericolo che può essere reale, anticipata dalla previsione, evocata dal ricordo o prodotta dalla fantasia
  - **None**. None of the 

Following, we show some examples. 

^ Verso            ^ Classe       ^ Verso          ^ Classe ^
| a | b | c | s | 

**Attention: I wanted to add some examples from the files provided by Federico on July 10th. I didn't find good ones!**

==== Annotation ====

=== Guidelines v 0.5 ===

First of all, thank you for helping us with this work. We are a group of researchers from the D. of Classical Philology and Italian Studies and the D. of Interpreting and Translation, both at UniBO. Your work will help us to produce artificial intelligence models to analyse the lyrics in music. 

At this stage we are focused on opera. You will annotate arie in Italian from diverse periods, looking for the sentiments that they express. Your work consists of identifying the emotion expressed in each of the verses composing an aria. You can choose among six emotions (or none of them), which are defined next:

//A(n improved) copy of the definitions above//

In the following link (//link to the spreadsheet//), you will observe **k** columns representing a number of opera arie. The columns contain the following (**I guess we have to add the column titles here; I add some proposals**):
  - **id** A unique id, tied to the verse. You can safely ignore it. Please, do not modify this column. 
  - **verse** A verse, inside of an aria. This is the text that you are going to analyse. 
  - **sentiment** An empty field. It is here where you can select the expressed emotion (or none of them)  
 - **sentimet (sec.)** An empty field. This is available to choose a secondary emotion, in case it is really difficult to choose just one for the verse  
  - **confidence** An empty field. A field with default value "I am sure". It is ok if you are not 100% sure about one decision. If that is the case, please let us know by choosing the right confidence level here
  - **comments** An empty field. Feel free to tell us something about this example, if you feel like (this is not mandatory).


=== Protocol ===

== Pilot annotation ==

Two annotators (perhaps three) will annotate independently 200 verses, following version 1.0 of the guideline (to be consolidated). At this stage, we will ask the annotators to try to be a bit more verbose about comments and issues in general. 

The outcome will be studied by Paolo, Federico, and Alberto. Adjustments to the guidelines (and perhaps the task itself) will be then performed, producing guideline version 2. 

== Full annotation ==

The same two (three) annotators will label all the examples in the corpus. 

TBD. Whether we will decide the gold annotation by majority voting or by manual consolidation.

==== Model Construction ====

The annotated dataset will be split into the typical train-dev-test partitions. Cross-validation+ one held-out test partition are not discarded, given the amount of instances.

Different models and representations will be explored to try to come out with a highly-accurate model. 