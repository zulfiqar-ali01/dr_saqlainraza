import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';

export default function Publications() {
  const papers = [
    {
        "title": "Cardiometabolic Dysregulation and PON1 Genetic Susceptibility in Chronic E-waste Recyclers Exposed to Potentially Toxic Elements",
        "authors": "Aneela Shoukat, Syed Muhammad Nurulain, Rashid Nazir Qureshi, Amina Zafar, Sabir Hussain, Sosan Andleeb Khan, Sajid Mehmood, Sadia Asmat, Saqlain Raza, Syed Tahir Abbas Shah",
        "journal": "Cardiovasc Toxicol",
        "year": "2026",
        "link": "https://doi.org/10.1007/s12012-025-10089-1"
    },
    {
        "title": "Complementarity in mixed farming systems enhances the smallholders income: Evidence from Punjab, Pakistan",
        "authors": "M\u2019hand Fares, Saqlain Raza, Tusawar Iftikhar Ahmad",
        "journal": "PLoS ONE",
        "year": "2025",
        "link": "https://doi.org/10.1371/journal.pone.0319995"
    },
    {
        "title": "Exposure to heavy metals, antioxidant status, and the interaction of single nucleotide polymorphisms in the genes CAT rs7943316, GSTP1 rs1695, as well as GSTM1 and GSTT1 genes, among workers in occupational settings",
        "authors": "Sosan Andleeb Khan, Syed Muhammad Nurulain, Rashid Nazir Qureshi, Amina Zafar, Zarish Riaz, Aneela Shoukat, Zahid Muneer, Nazia Bibi, Saqlain Raza, Sabir Hussain, Syed Tahir Abbas Shah",
        "journal": "Environmental Toxicology and Pharmacology",
        "year": "2024",
        "link": "https://doi.org/10.1016/j.etap.2024.104452"
    },
    {
        "title": "Chronic exposure to electronic waste poses risk to liver toxicity with molecular interaction of GSTM1, GSTT1 null variants, and GSTP1",
        "authors": "Aneela Shoukat, Syed Muhammad Nurulain, Sabir Hussain, Sosan Andleeb Khan, Hussain Ahmed, Zahid Muneer, Syed Tahir Abbas Shah, Saqlain Raza, Syed Ali Musstjab Shah Eqani",
        "journal": "Environmental Pollution",
        "year": "2023",
        "link": "https://doi.org/10.1016/j.envpol.2023.122204"
    },
    {
        "title": "A novel fractional model for the projection of households using wealth index quintiles",
        "authors": "Shakoor Ahmad, Shumaila Javeed, Saqlain Raza, Dumitru Baleanu",
        "journal": "PLOS ONE",
        "year": "2022",
        "link": "https://doi.org/10.1371/journal.pone.0277472"
    },
    {
        "title": "Prevalence of child malnutrition and household socioeconomic deprivation: A case study of marginalized district in Punjab, Pakistan",
        "authors": "Muhammad Shahid, Farooq Ahmed, Waqar Ameer, Jing Guo, Saqlain Raza, Saireen Fatima, Madeeha Gohar Qureshi",
        "journal": "PLOS ONE",
        "year": "2022",
        "link": "https://doi.org/10.1371/journal.pone.0263470"
    },
    {
        "title": "Does Mothers' Awareness of Health and Nutrition Matter? A Case Study of Child Malnutrition in Marginalized Rural Community of Punjab, Pakistan",
        "authors": "Muhammad Shahid, Yang Cao, Farooq Ahmed, Saqlain Raza, Jing Guo, Najma Iqbal Malik, Umara Rauf, Madeeha Gohar Qureshi, Rafit Saheed, Rohma Maryam",
        "journal": "Frontiers in Public Health",
        "year": "2022",
        "link": "https://doi.org/10.3389/fpubh.2022.792164"
    },
    {
        "title": "Multidimensional poverty index across districts in Punjab, Pakistan: estimation and rationale to consolidate with SDGs",
        "authors": "Tabish Nawab, Saqlain Raza, Malik Shahzad Shabbir, Ghulam Yahya Khan, Sana Bashir",
        "journal": "Environment, Development and Sustainability",
        "year": "2023",
        "link": "https://doi.org/10.1007/s10668-021-02095-4"
    },
    {
        "title": "Financial Instability and CO<sub>2</sub> Emissions in India: Evidence from ARDL Bound Testing Approach",
        "authors": "Muhammad Qayyum, Yuyuan Yu, Mir Muhammad Nizamani, Saqlain Raza, Minhaj Ali, Shijie Li",
        "journal": "Energy &amp; Environment",
        "year": "2023",
        "link": "https://doi.org/10.1177/0958305x211065019"
    },
    {
        "title": "UNDP programme positioning",
        "authors": "",
        "journal": "",
        "year": "2006",
        "link": "https://doi.org/10.18356/0c205d81-en"
    },
    {
        "title": "Oxidative Stress and Analysis of Selected SNPs of ACHE (rs 2571598), BCHE (rs 3495), CAT (rs 7943316), SIRT1 (rs 10823108), GSTP1 (rs 1695), and Gene GSTM1, GSTT1 in Chronic Organophosphates Exposed Groups from Cameroon and Pakistan",
        "authors": "Leonel Javeres Mbah Ntepe, Rabia Habib, Ngondi Judith Laure, Saqlain Raza, Eugenie Nepovimova, Kamil Kuca, Sajida Batool, Syed Muhammad Nurulain",
        "journal": "International Journal of Molecular Sciences",
        "year": "2020",
        "link": "https://doi.org/10.3390/ijms21176432"
    },
    {
        "title": "Mixture of Organophosphates Chronic Exposure and Pancreatic Dysregulations in Two Different Population Samples",
        "authors": "Mbah Ntepe Leonel Javeres, Saqlain Raza, Ngondi Judith, Fozia Anwar, Rabia Habib, Sajida Batool, Syed Muhammed Nurulain",
        "journal": "Frontiers in Public Health",
        "year": "2020",
        "link": "https://doi.org/10.3389/fpubh.2020.534902"
    },
    {
        "title": "GOVERNMENT SPENDING AND ECONOMIC GROWTH RELATIONSHIP: CAN A BETTER INSTITUTIONAL QUALITY FIX THE OUTCOMES?",
        "authors": "MUHAMMAD KHAN, SAQLAIN RAZA, XUAN VINH VO",
        "journal": "The Singapore Economic Review",
        "year": "2024",
        "link": "https://doi.org/10.1142/s0217590820500216"
    },
    {
        "title": "Unsteady Magnetohydrodynamic Convective Fluid Flow of Oldroyd-B Model Considering Ramped Wall Temperature and Ramped Wall Velocity",
        "authors": "Mazhar Hussain Tiwana, Amer Bilal Mann, Muhammad Rizwan, Khadija Maqbool, Shumaila Javeed, Saqlain Raza, Mansoor Shaukat Khan",
        "journal": "Mathematics",
        "year": "2019",
        "link": "https://doi.org/10.3390/math7080676"
    },
    {
        "title": "Molecular characterization of human group A rotavirus genotypes circulating in Rawalpindi, Islamabad, Pakistan during 2015-2016",
        "authors": "Asma Sadiq, Nazish Bostan, Habib Bokhari, Jelle Matthijnssens, Kwe Claude Yinda, Saqlain Raza, Tayyab Nawaz",
        "journal": "PLOS ONE",
        "year": "2019",
        "link": "https://doi.org/10.1371/journal.pone.0220387"
    },
    {
        "title": "Prevalence of Hepatitis B in KPK Province Pakistan",
        "authors": "",
        "journal": "National Journal of Biological Sciences",
        "year": "2020",
        "link": "https://doi.org/10.37605/njbs.v1i2.3"
    },
    {
        "title": "Is There Complementarity Between Certified Labels and Brands? Evidence from Small French Cooperatives",
        "authors": "M\u2019hand Fares, Saqlain Raza, Alban Thomas",
        "journal": "Review of Industrial Organization",
        "year": "2018",
        "link": "https://doi.org/10.1007/s11151-018-9618-z"
    }
];

  return (
    <section id="publications" className="py-24 bg-slate-50 dark:bg-slate-900 dark:bg-slate-100 border-y border-slate-100 dark:border-slate-800 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-16 flex-col md:flex-row gap-6">
          <div className="flex items-center gap-4">
             <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
               <FileText size={28} />
             </div>
             <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">Research Publications</h2>
          </div>
          <a href="https://scholar.google.com/citations?user=aDTbV9oAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-2 text-blue-600 font-bold hover:text-blue-800 hover:bg-blue-100 transition text-sm bg-blue-50 px-6 py-3 rounded-full whitespace-nowrap">
            View Google Scholar &rarr;
          </a>
        </div>
        
        <div className="flex flex-col gap-6">
          {papers.map((paper, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 dark:bg-slate-100 p-6 rounded-3xl hover:shadow-lg transition border border-slate-200/60 hover:border-blue-200">
              <div className="flex items-start gap-5">
                <span className="shrink-0 w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-black text-sm">
                  {idx + 1}
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{paper.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-2">{paper.authors}</p>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-medium">
                    <span className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-3 py-1 rounded-full">{paper.journal}</span>
                    <span className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-3 py-1 rounded-full">{paper.year}</span>
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
