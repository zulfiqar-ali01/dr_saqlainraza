import React from 'react';
import { FileText } from 'lucide-react';

export default function Publications() {
  const papers = [
    "Cardiometabolic Dysregulation and PON1 Genetic Susceptibility in Chronic E-Waste Recyclers Exposed to Potentially Toxic Elements Cardiovascular Toxicology, 2026.",
    "Complementarity in mixed farming systems enhances the smallholders income: Evidence from Punjab, Pakistan PLoS ONE, 2025.",
    "Exposure to heavy metals, antioxidant status, and the interaction of single nucleotide polymorphisms in the genes CAT rs7943316, GSTP1 rs1695, as well as GSTM1 and GSTT1 genes, among workers in occupational settings Environmental Toxicology and Pharmacology, 2024.",
    "Chronic exposure to electronic waste poses risk to liver toxicity with molecular interaction of GSTM1, GSTT1 null variants, and GSTP1 Environmental Pollution, 2023.",
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
  ];

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
        
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
          {papers.map((paper, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl hover:shadow-lg transition border border-slate-200/60 hover:border-blue-200">
              <div className="flex items-start gap-5">
                <span className="shrink-0 w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-black text-sm">
                  {idx + 1}
                </span>
                <p className="text-slate-600 leading-relaxed text-base pt-2">
                  {paper}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
