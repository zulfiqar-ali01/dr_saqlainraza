import urllib.request
import urllib.parse
import json
import time

titles = [
    "A novel fractional model for the projection of households using wealth index quintiles",
    "Prevalence of child malnutrition and household socioeconomic deprivation: A case study of marginalized district in Punjab, Pakistan",
    "Does Mothers' Awareness of Health and Nutrition Matter? A Case Study of Child Malnutrition in Marginalized Rural Community of Punjab, Pakistan",
    "Multidimensional poverty index across districts in Punjab, Pakistan: estimation and rationale to consolidate with SDGs",
    "Financial Instability and CO2 Emissions in India: Evidence from ARDL Bound Testing Approach",
    "Accelerated Implementation Programme UNDP - Baseline Survey",
    "Oxidative stress and analysis of selected SNPs of ACHE (rs 2571598), BCHE (rs 3495), CAT (rs 7943316), SIRT1 (rs 10823108), GSTP1 (rs 1695), and Gene GSTM1, GSTT1 in chronic organophosphates exposed groups from Cameroon and Pakistan",
    "Mixture of Organophosphates Chronic Exposure and Pancreatic Dysregulations in Two Different Population Samples",
    "Government Spending and Economic Growth relationship: can a better institutional quality fix the outcomes?",
    "Unsteady Magnetohydrodynamic convective fluid flow of Oldroyd-B model considering ramped wall temperature and ramped wall velocity",
    "Molecular characterization of human group A rotavirus genotypes circulating in Rawalpindi, Islamabad, Pakistan during 2015-2016",
    "Pulmonary health risks of working at cement plant in KPK province of Pakistan",
    "Is there complementarity between certified labels and brands? Evidence from small French co-operatives"
]

results = []
for t in titles:
    query = urllib.parse.quote(t)
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
                
                # try to get year
                year = ''
                if 'published-print' in item:
                    year = item['published-print']['date-parts'][0][0]
                elif 'published-online' in item:
                    year = item['published-online']['date-parts'][0][0]

                results.append({
                    "title": t,
                    "authors": author_names,
                    "journal": journal,
                    "year": year,
                    "link": item.get('URL', '')
                })
            else:
                results.append({"title": t, "error": "not found"})
    except Exception as e:
        results.append({"title": t, "error": str(e)})
    time.sleep(0.5)

print(json.dumps(results, indent=2))
