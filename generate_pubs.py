import urllib.request
import urllib.parse
import json
import time

provided = {
    "Cardiometabolic Dysregulation and PON1 Genetic Susceptibility in Chronic E-Waste Recyclers Exposed to Potentially Toxic Elements Cardiovascular Toxicology, 2026.": {
        "title": "Cardiometabolic Dysregulation and PON1 Genetic Susceptibility in Chronic E-waste Recyclers Exposed to Potentially Toxic Elements",
        "authors": "Aneela Shoukat, Syed Muhammad Nurulain, Rashid Nazir Qureshi, Amina Zafar, Sabir Hussain, Sosan Andleeb Khan, Sajid Mehmood, Sadia Asmat, Saqlain Raza, Syed Tahir Abbas Shah",
        "journal": "Cardiovasc Toxicol",
        "year": "2026",
        "link": "https://doi.org/10.1007/s12012-025-10089-1"
    },
    "Complementarity in mixed farming systems enhances the smallholders income: Evidence from Punjab, Pakistan PLoS ONE, 2025.": {
        "title": "Complementarity in mixed farming systems enhances the smallholders income: Evidence from Punjab, Pakistan",
        "authors": "M’hand Fares, Saqlain Raza, Tusawar Iftikhar Ahmad",
        "journal": "PLoS ONE",
        "year": "2025",
        "link": "https://doi.org/10.1371/journal.pone.0319995"
    },
    "Exposure to heavy metals, antioxidant status, and the interaction of single nucleotide polymorphisms in the genes CAT rs7943316, GSTP1 rs1695, as well as GSTM1 and GSTT1 genes, among workers in occupational settings Environmental Toxicology and Pharmacology, 2024.": {
        "title": "Exposure to heavy metals, antioxidant status, and the interaction of single nucleotide polymorphisms in the genes CAT rs7943316, GSTP1 rs1695, as well as GSTM1 and GSTT1 genes, among workers in occupational settings",
        "authors": "Sosan Andleeb Khan, Syed Muhammad Nurulain, Rashid Nazir Qureshi, Amina Zafar, Zarish Riaz, Aneela Shoukat, Zahid Muneer, Nazia Bibi, Saqlain Raza, Sabir Hussain, Syed Tahir Abbas Shah",
        "journal": "Environmental Toxicology and Pharmacology",
        "year": "2024",
        "link": "https://doi.org/10.1016/j.etap.2024.104452"
    },
    "Chronic exposure to electronic waste poses risk to liver toxicity with molecular interaction of GSTM1, GSTT1 null variants, and GSTP1 Environmental Pollution, 2023.": {
        "title": "Chronic exposure to electronic waste poses risk to liver toxicity with molecular interaction of GSTM1, GSTT1 null variants, and GSTP1",
        "authors": "Aneela Shoukat, Syed Muhammad Nurulain, Sabir Hussain, Sosan Andleeb Khan, Hussain Ahmed, Zahid Muneer, Syed Tahir Abbas Shah, Saqlain Raza, Syed Ali Musstjab Shah Eqani",
        "journal": "Environmental Pollution",
        "year": "2023",
        "link": "https://doi.org/10.1016/j.envpol.2023.122204"
    }
}

remaining = [
    "A novel fractional model for the projection of households using wealth index quintiles PLoS ONE, 2022.",
    "Prevalence of child malnutrition and household socioeconomic deprivation: A case study of marginalized district in Punjab, Pakistan PLoS ONE, 2022.",
    "Does Mothers' Awareness of Health and Nutrition Matter? A Case Study of Child Malnutrition in Marginalized Rural Community of Punjab, Pakistan Frontiers in Public Health, 2022.",
    "Multidimensional poverty index across districts in Punjab, Pakistan: estimation and rationale to consolidate with SDGs Environment, Development and Sustainability, 2022.",
    "Financial Instability and CO2 Emissions in India: Evidence from ARDL Bound Testing Approach Energy & Environment, 2022.",
    "Accelerated Implementation Programme UNDP - Baseline Survey , 2021.",
    "Oxidative stress and analysis of selected SNPs of ACHE (rs 2571598), BCHE (rs 3495), CAT (rs 7943316), SIRT1 (rs 10823108), GSTP1 (rs 1695), and Gene GSTM1, GSTT1 in chronic organophosphates exposed groups from Cameroon and Pakistan International Journal of Molecular Sciences, 2020.",
    "Mixture of Organophosphates Chronic Exposure and Pancreatic Dysregulations in Two Different Population Samples Frontiers in Public Health 2020.",
    "Government Spending and Economic Growth relationship: can a better institutional quality fix the outcomes? Singapore Economic Review, 2020.",
    "Unsteady Magnetohydrodynamic convective fluid flow of Oldroyd-B model considering ramped wall temperature and ramped wall velocity Mathematics, 2019.",
    "Molecular characterization of human group A rotavirus genotypes circulating in Rawalpindi, Islamabad, Pakistan during 2015-2016 PLoS ONE, 2019.",
    "Pulmonary health risks of working at cement plant in KPK province of Pakistan Journal of Pakistan Medical Association, 2019.",
    "Is there complementarity between certified labels and brands? Evidence from small French co-operatives Review of Industrial Organization, 2018."
]

papers = []
for k, v in provided.items():
    papers.append(v)

for r in remaining:
    title_search = r.split(' 20')[0].split(' PLoS')[0].split(' Frontiers')[0].split(' Environment')[0].split(' Energy')[0].split(' International')[0].split(' Singapore')[0].split(' Mathematics')[0].split(' Journal')[0].split(' Review')[0].strip()
    query = urllib.parse.quote(title_search)
    url = f"https://api.crossref.org/works?query.title={query}&select=title,author,URL,container-title,published-print,published-online&rows=1"
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'mailto:test@example.com'})
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            if data['message']['items']:
                item = data['message']['items'][0]
                authors = item.get('author', [])
                author_names = ", ".join([f"{a.get('given', '')} {a.get('family', '')}".strip() for a in authors])
                journal = item.get('container-title', [''])[0] if item.get('container-title') else ''
                year = ''
                if 'published-print' in item:
                    year = item['published-print']['date-parts'][0][0]
                elif 'published-online' in item:
                    year = item['published-online']['date-parts'][0][0]
                
                link = item.get('URL', '')
                title = item.get('title', [title_search])[0]
                papers.append({
                    "title": title,
                    "authors": author_names,
                    "journal": journal,
                    "year": str(year),
                    "link": link
                })
            else:
                papers.append({"title": title_search, "authors": "Saqlain Raza et al.", "journal": "Unknown", "year": "Unknown", "link": ""})
    except Exception as e:
        papers.append({"title": title_search, "authors": "Saqlain Raza et al.", "journal": "Unknown", "year": "Unknown", "link": ""})
    time.sleep(0.5)

tsx_content = """import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';

export default function Publications() {
  const papers = """ + json.dumps(papers, indent=4) + """;

  return (
    <section id="publications" className="py-24 bg-slate-50 border-y border-slate-100 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-16 flex-col md:flex-row gap-6">
          <div className="flex items-center gap-4">
             <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
               <FileText size={28} />
             </div>
             <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Research Publications</h2>
          </div>
          <a href="https://scholar.google.com/citations?user=aDTbV9oAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-2 text-blue-600 font-bold hover:text-blue-800 hover:bg-blue-100 transition text-sm bg-blue-50 px-6 py-3 rounded-full whitespace-nowrap">
            View Google Scholar &rarr;
          </a>
        </div>
        
        <div className="flex flex-col gap-6">
          {papers.map((paper, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl hover:shadow-lg transition border border-slate-200/60 hover:border-blue-200">
              <div className="flex items-start gap-5">
                <span className="shrink-0 w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-black text-sm">
                  {idx + 1}
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{paper.title}</h3>
                  <p className="text-slate-600 text-sm mb-2">{paper.authors}</p>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-medium">
                    <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full">{paper.journal}</span>
                    <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full">{paper.year}</span>
                    {paper.link && (
                      <a href={paper.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800">
                        View Paper <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
"""

with open("/home/sadaqat/p/saqlain-portfolio/src/components/Publications.tsx", "w") as f:
    f.write(tsx_content)

print("Publications.tsx updated successfully!")
