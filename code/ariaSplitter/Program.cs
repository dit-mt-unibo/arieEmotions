using System;
using System.Collections.Generic;
using System.Text;
using System.IO;
using System.Net;

namespace AriaSplitter
{
    class Program
    {
        static void Main(string[] args)
        {
            string file = @"C:\Users\fede9\mtdata\linkNOpera\Arie_testi.nt";
            SplitFile(file);
        }

        static readonly string[] separators = { ".\\r\\n", "\\r\\n\\r\\n", "\\r\\n \\r\\n" };
        //  the extracted textual data is enclosed in " and ends with " .". Let's trim all that. 
        static readonly char[] trimmings = { ' ', '"', '.'}; 
        const string comment = "<http://www.w3.org/2000/01/rdf-schema#comment>";

        public static void SplitFile(string fileName)
        {
            int lc = 0;
            int index;

            using (StreamReader sr = new StreamReader(fileName))
            {
                using (StreamWriter sw = new StreamWriter(new FileStream(fileName + ".csv", FileMode.OpenOrCreate) ,Encoding.UTF8))
                {
                    // write comment line with fields definition
                    sw.WriteLine("ID, Verso, Emozione, Fiducia, Commenti");

                    while (!sr.EndOfStream)
                    {
                        lc++;
                        if (lc > 200000)
                            break;

                        string line = sr.ReadLine();
                        // tag with aria ID,
                        if (line.StartsWith("<"))
                        {
                            if((index= line.IndexOf('>')) > 0)
                            {
                                // get aria ID, minus opening and closing angle bracket
                                string ariaId = line.Substring(1, index-1);
                                ariaId = ariaId.Substring(ariaId.LastIndexOf('/')+1);
                                line = line.Substring(index + 1).Trim();
                                // tag with rdf-comment
                                if (line.StartsWith(comment))
                                {
                                    // actual aria, trim the beg and end "
                                    line = line.Substring(comment.Length).Trim(trimmings);
                                    // silly trick: replace ? with ?. 
                                    // so the ? will be kept, and .\r\n will match end of sentence and removed during Split
                                    line = line.Replace("?", "?.");
                                    // look for .\r\n or \r\n\r\n or '\r\n \r\n'
                                    string[] sentences = line.Split(separators, StringSplitOptions.RemoveEmptyEntries);
                                    int i = 0;
                                    foreach (string s in sentences)
                                    {
                                        string verseId = ariaId + '_' + string.Format("{0:D2}", i);
                                        string st = s.Replace("\\r\\n", " ");
                                        sw.WriteLine("{0},\"{1}\",", verseId, System.Text.RegularExpressions.Regex.Unescape(st));
                                        i++;
                                    }
                                    // print empty line to separate arias
                                    sw.WriteLine();
                                }
                                else
                                    Console.WriteLine("Missing RDF comment at line {0}", lc);                                
                            }
                            else
                                Console.WriteLine("Missing closing tag at line {0}", lc);
                        }
                        else
                            Console.WriteLine("Sentence not well formatted, skipping line {0}", lc);
                        
                    }
                }
            }
        }    

    }
}
