/* Learn & Build 120-day tracker v3 — fixed */
const ROADMAP = [
  // Phase 1 — Python + tooling
  {d:1,p:'Python & Setup',title:'Environment + learning system',desc:'Set up your workspace, repo, folders, browser bookmarks and a simple learning workflow.',tasks:['Create the 120-day GitHub repo','Install or verify Python, VS Code and Git','Create a /notes and /projects structure','Write your 4-month outcome in the learning log'],tags:['Setup','GitHub','Productivity']},
  {d:2,p:'Python & Setup',title:'Python fundamentals refresh',desc:'Revisit variables, types, operators and console I/O with tiny exercises.',tasks:['Review variables and data types','Practice input/output and type conversion','Complete 8 tiny exercises','Write 3 things that still feel confusing'],tags:['Python']},
  {d:3,p:'Python & Setup',title:'Control flow',desc:'Conditionals, loops and practical logic building.',tasks:['Review if / elif / else','Practice for and while loops','Solve 8 logic problems','Build a tiny command-line menu'],tags:['Python','Logic']},
  {d:4,p:'Python & Setup',title:'Functions',desc:'Turn repeated logic into clean reusable functions.',tasks:['Define functions and parameters','Understand return values and scope','Practice default and keyword arguments','Refactor yesterday’s menu using functions'],tags:['Python']},
  {d:5,p:'Python & Setup',title:'Collections',desc:'Lists, tuples, sets and dictionaries for real data work.',tasks:['Practice list operations','Practice dictionary patterns','Compare list vs set vs tuple use cases','Build a mini contact-book script'],tags:['Python','Data']},
  {d:6,p:'Python & Setup',title:'Strings + files',desc:'String handling and reading/writing simple files.',tasks:['Practice slicing and string methods','Read and write TXT/CSV files','Parse a small text dataset','Build a simple word-frequency script'],tags:['Python','Files']},
  {d:7,p:'Python & Setup',title:'Exceptions + debugging',desc:'Learn to understand errors instead of fearing them.',tasks:['Review common Python exceptions','Use try/except responsibly','Read tracebacks line by line','Break and fix 5 small snippets'],tags:['Python','Debugging']},
  {d:8,p:'Python & Setup',title:'Modules + packages',desc:'Understand imports, reusable files and the Python package ecosystem.',tasks:['Create your own module','Practice imports and __name__','Use pip and a virtual environment','Write a tiny utility package'],tags:['Python','Tooling']},
  {d:9,p:'Python & Setup',title:'OOP basics',desc:'Understand classes enough to read and organize real projects.',tasks:['Review class, object, method and attribute','Create a simple class','Understand inheritance conceptually','Refactor one tiny project around objects'],tags:['Python','OOP']},
  {d:10,p:'Python & Setup',title:'Git + GitHub fundamentals',desc:'Version control as part of your daily learning workflow.',tasks:['Create repository and first commit','Practice status, add, commit, log','Create and merge a feature branch','Push your Python practice to GitHub'],tags:['Git','GitHub']},
  {d:11,p:'Python & Setup',title:'NumPy essentials',desc:'Arrays, vectorized operations and why numerical Python matters.',tasks:['Create 1D and 2D arrays','Practice indexing and slicing','Practice shape, dtype and reshape','Do 10 vectorized calculations'],tags:['Python','NumPy']},
  {d:12,p:'Python & Setup',title:'Pandas foundations',desc:'DataFrames, Series and loading real-world data.',tasks:['Create Series and DataFrames','Load CSV and Excel data','Inspect columns, types and missing values','Answer 10 questions from one dataset'],tags:['Python','Pandas']},
  {d:13,p:'Python & Setup',title:'Data cleaning',desc:'Missing values, duplicates, types and practical cleanup.',tasks:['Find missing values','Handle duplicates deliberately','Fix data types','Document cleaning decisions'],tags:['Pandas','Data']},
  {d:14,p:'Python & Setup',title:'Pandas transformations',desc:'Filter, sort, group and merge tables.',tasks:['Filter rows with boolean logic','Sort and rank values','Group and aggregate','Merge two related DataFrames'],tags:['Pandas','Data']},
  {d:15,p:'Python & Setup',title:'Data visualization',desc:'Use charts to understand and communicate data.',tasks:['Review bar, line, scatter and histogram','Create 4 charts from one dataset','Write one insight under each chart','Export the notebook cleanly'],tags:['Python','Visualization']},
  {d:16,p:'Python & Setup',title:'EDA workflow',desc:'A repeatable exploratory data analysis process.',tasks:['Define questions before analyzing','Inspect distributions and outliers','Study useful relationships','Write a 5-point EDA summary'],tags:['EDA','Pandas']},
  {d:17,p:'Python & Setup',title:'Python mini-project',desc:'Use Python + Pandas to answer a practical question end-to-end.',tasks:['Choose a public dataset','Clean and explore it','Create at least 5 useful findings','Publish a concise GitHub README'],tags:['Project','Python']},
  {d:18,p:'Python & Setup',title:'App-builder preview: data UI',desc:'Turn a tiny dataset into a simple browser interface.',tasks:['Create a static HTML/CSS page','Load sample JSON with JS','Render cards or a table','Commit the prototype to GitHub'],tags:['HTML','CSS','JavaScript','Build']},
  {d:19,p:'Python & Setup',title:'JavaScript essentials',desc:'The minimum JS you need to control browser interfaces.',tasks:['Review variables and arrays/objects','Practice functions and DOM selection','Handle a button click and form input','Build a tiny interactive widget'],tags:['JavaScript','Web']},
  {d:20,p:'Python & Setup',title:'Milestone 1 — ship something',desc:'Package one learning artifact so it feels like a product, not homework.',tasks:['Choose your strongest Python/data mini-project','Polish README and screenshots','Deploy the tiny web demo on GitHub Pages','Log what made the project better'],tags:['Milestone','GitHub Pages']},
  // Phase 2 — SQL + Excel
  {d:21,p:'SQL & Spreadsheet',title:'SQL basics',desc:'Get comfortable querying tables and thinking in relational data.',tasks:['Create a sample database/table','Practice SELECT and WHERE','Practice ORDER BY and LIMIT','Write 10 basic queries'],tags:['SQL']},
  {d:22,p:'SQL & Spreadsheet',title:'Aggregations',desc:'COUNT, SUM, AVG, MIN, MAX and GROUP BY.',tasks:['Practice aggregate functions','Use GROUP BY','Use HAVING','Answer 10 business-style questions'],tags:['SQL']},
  {d:23,p:'SQL & Spreadsheet',title:'Joins',desc:'Connect tables and reason about relationships.',tasks:['Understand primary/foreign keys','Practice INNER JOIN','Practice LEFT JOIN','Solve 8 join questions'],tags:['SQL']},
  {d:24,p:'SQL & Spreadsheet',title:'Subqueries + CTEs',desc:'Break complex questions into understandable pieces.',tasks:['Write scalar and table subqueries','Use CTEs','Rewrite one query two ways','Save your best 5 queries'],tags:['SQL']},
  {d:25,p:'SQL & Spreadsheet',title:'Window functions',desc:'Ranking and running calculations for analytics.',tasks:['Understand PARTITION BY','Practice ROW_NUMBER and RANK','Practice running totals','Build one analysis query'],tags:['SQL','Analytics']},
  {d:26,p:'SQL & Spreadsheet',title:'SQL mini-project',desc:'Analyze a realistic dataset with 15–20 questions.',tasks:['Choose or create a small schema','Write the analysis questions','Answer them with SQL','Publish a query notebook/README'],tags:['SQL','Project']},
  {d:27,p:'SQL & Spreadsheet',title:'Excel foundations',desc:'Fast analysis and data handling in spreadsheets.',tasks:['Review references and tables','Use sorting/filtering effectively','Practice IF, SUMIFS and COUNTIFS','Build a clean analysis sheet'],tags:['Excel']},
  {d:28,p:'SQL & Spreadsheet',title:'Excel lookup logic',desc:'Join information across sheets without writing code.',tasks:['Practice XLOOKUP or equivalent','Use INDEX/MATCH conceptually','Create a small lookup model','Document common errors'],tags:['Excel']},
  {d:29,p:'SQL & Spreadsheet',title:'Pivot tables',desc:'Summarize data fast for decision-making.',tasks:['Create pivot tables','Group dates/categories','Add slicers/filters','Write 5 decisions supported by the pivot'],tags:['Excel','Analytics']},
  {d:30,p:'SQL & Spreadsheet',title:'Excel dashboard',desc:'Design a compact decision dashboard.',tasks:['Choose 3–5 KPIs','Create supporting pivots','Add suitable charts','Polish spacing, labels and hierarchy'],tags:['Excel','Dashboard']},
  {d:31,p:'SQL & Spreadsheet',title:'Data storytelling',desc:'Turn analysis into a narrative a non-technical person can use.',tasks:['Write the business question','Select only decision-relevant charts','Summarize key findings','Give 3 recommendations'],tags:['Analytics','Communication']},
  {d:32,p:'SQL & Spreadsheet',title:'App-builder preview: dashboard UI',desc:'Recreate your Excel dashboard as a browser prototype.',tasks:['Sketch the layout','Build KPI cards in HTML/CSS','Add simple interactive filtering with JS','Compare UX to your spreadsheet'],tags:['HTML','CSS','JS','Build']},
  {d:33,p:'SQL & Spreadsheet',title:'SQL + Excel integration thinking',desc:'Understand where each tool fits in a real workflow.',tasks:['Map a raw-data-to-dashboard pipeline','Identify what SQL should do','Identify what Excel should do','Write one end-to-end workflow'],tags:['SQL','Excel','Workflow']},
  {d:34,p:'SQL & Spreadsheet',title:'Analytics case study',desc:'Solve a small business problem using SQL + Excel.',tasks:['Define the question','Query and prepare data','Build a decision-ready summary','Publish the case study'],tags:['Analytics','Project']},
  {d:35,p:'SQL & Spreadsheet',title:'Milestone 2 — analytics portfolio piece',desc:'Polish and present your SQL/Excel work.',tasks:['Clean the project repository','Add screenshots','Write a 60-second project explanation','Record the biggest learning'],tags:['Milestone','Portfolio']},
  // Phase 3 — Power BI
  {d:36,p:'Power BI & BI',title:'Power BI setup + data model',desc:'Get comfortable with the BI workflow.',tasks:['Import a dataset','Inspect data types and relationships','Understand model vs report view','Save a clean PBIX project'],tags:['Power BI']},
  {d:37,p:'Power BI & BI',title:'Power Query',desc:'Transform data before it reaches the report.',tasks:['Clean columns','Split/merge columns','Handle blanks and errors','Apply repeatable transformations'],tags:['Power BI','ETL']},
  {d:38,p:'Power BI & BI',title:'Data modeling',desc:'Relationships, star-schema thinking and measures.',tasks:['Build a simple star schema','Create relationships','Understand fact vs dimension tables','Identify where measures belong'],tags:['Power BI','Modeling']},
  {d:39,p:'Power BI & BI',title:'DAX basics',desc:'Measures, calculated columns and evaluation context at a practical level.',tasks:['Create basic measures','Practice CALCULATE conceptually','Create time-aware measures','Check results against known totals'],tags:['Power BI','DAX']},
  {d:40,p:'Power BI & BI',title:'Report design',desc:'Create dashboards that communicate quickly.',tasks:['Choose a page structure','Create KPI cards','Use 3–4 chart types intentionally','Improve hierarchy and whitespace'],tags:['Power BI','UX']},
  {d:41,p:'Power BI & BI',title:'Interactive reports',desc:'Slicers, drill-through and useful interaction patterns.',tasks:['Add slicers','Add drill-through','Test filter interactions','Remove unnecessary visual noise'],tags:['Power BI']},
  {d:42,p:'Power BI & BI',title:'BI mini-project',desc:'Build a stakeholder-ready dashboard from raw data.',tasks:['Start from a business question','Transform and model the data','Create the report','Write a short executive summary'],tags:['Power BI','Project']},
  {d:43,p:'Power BI & BI',title:'Web dashboard thinking',desc:'Translate BI lessons into product UX.',tasks:['Study a modern analytics app','Identify information hierarchy','Sketch your own dashboard layout','Build a static front-end version'],tags:['Product','UX','Web']},
  {d:44,p:'Power BI & BI',title:'Analytics + product metrics',desc:'Learn the language of digital products.',tasks:['Understand activation, retention and conversion','Define 5 useful product metrics','Sketch an analytics panel','Write what each metric would trigger'],tags:['Product','Analytics']},
  {d:45,p:'Power BI & BI',title:'Milestone 3 — dashboard shipped',desc:'Make the dashboard portfolio-ready and explain your decisions.',tasks:['Polish visuals','Add screenshots and README','Write 5 business insights','Share the result in your GitHub portfolio'],tags:['Milestone','Power BI']},
  // Phase 4 — ML
  {d:46,p:'Machine Learning',title:'ML workflow refresher',desc:'From problem definition to evaluation.',tasks:['Define supervised vs unsupervised learning','Map problem → target → features','Review train/validation/test split','Write the standard ML workflow from memory'],tags:['ML']},
  {d:47,p:'Machine Learning',title:'Linear regression',desc:'Understand regression through intuition and evaluation.',tasks:['Review hypothesis and loss','Fit a simple regression model','Interpret coefficients carefully','Compare MAE and RMSE'],tags:['ML','Regression']},
  {d:48,p:'Machine Learning',title:'Logistic regression',desc:'Classification probability and decision boundaries.',tasks:['Review sigmoid intuition','Train a binary classifier','Interpret probabilities vs labels','Evaluate precision and recall'],tags:['ML','Classification']},
  {d:49,p:'Machine Learning',title:'Trees',desc:'Decision trees and their strengths/weaknesses.',tasks:['Understand splitting intuition','Train a decision tree','Observe overfitting','Tune one or two parameters'],tags:['ML','Trees']},
  {d:50,p:'Machine Learning',title:'Random forests',desc:'Bagging and robust tree ensembles.',tasks:['Explain why ensembles help','Train a random forest','Inspect feature importance','Compare with a single tree'],tags:['ML','Ensemble']},
  {d:51,p:'Machine Learning',title:'Gradient boosting',desc:'Understand boosting and modern tabular modeling.',tasks:['Learn boosting intuition','Try a gradient boosting model','Compare metrics against random forest','Record when boosting is useful'],tags:['ML','Boosting']},
  {d:52,p:'Machine Learning',title:'SVM + KNN',desc:'Refresh distance and margin-based methods.',tasks:['Review KNN intuition','Review SVM margin intuition','Try both on a small dataset','Note scaling requirements'],tags:['ML']},
  {d:53,p:'Machine Learning',title:'Clustering',desc:'K-Means and the idea of grouping without labels.',tasks:['Choose an unlabeled dataset','Standardize features','Try K-Means','Interpret clusters cautiously'],tags:['ML','Unsupervised']},
  {d:54,p:'Machine Learning',title:'Dimensionality reduction',desc:'Understand PCA conceptually and practically.',tasks:['Review variance and principal components','Run PCA','Visualize reduced data','Explain the trade-off in plain English'],tags:['ML','PCA']},
  {d:55,p:'Machine Learning',title:'Evaluation deep dive',desc:'Metrics are part of the problem definition.',tasks:['Review confusion matrix','Practice accuracy, precision, recall, F1','Review ROC-AUC','Choose metrics for 4 problem scenarios'],tags:['ML','Evaluation']},
  {d:56,p:'Machine Learning',title:'Cross-validation',desc:'Make evaluation more reliable.',tasks:['Review k-fold cross-validation','Run cross-validation','Compare mean vs spread of scores','Explain data leakage risk'],tags:['ML','Evaluation']},
  {d:57,p:'Machine Learning',title:'Feature engineering',desc:'Better representations often beat more complex models.',tasks:['Create numeric features','Encode categories','Scale when needed','Compare before/after performance'],tags:['ML','Features']},
  {d:58,p:'Machine Learning',title:'Pipelines',desc:'Turn preprocessing + model into a reproducible workflow.',tasks:['Create a preprocessing pipeline','Add estimator','Use cross-validation on the pipeline','Save the final model workflow'],tags:['ML','Scikit-learn']},
  {d:59,p:'Machine Learning',title:'Hyperparameter tuning',desc:'Tune without blindly searching everything.',tasks:['Identify high-impact parameters','Try a small search space','Track scores','Avoid tuning on the test set'],tags:['ML']},
  {d:60,p:'Machine Learning',title:'Explainability',desc:'Understand what your model is actually using.',tasks:['Inspect feature importance','Use one local/global explanation method','Check whether explanations make sense','Write model caveats'],tags:['ML','Explainability']},
  {d:61,p:'Machine Learning',title:'ML project — problem framing',desc:'Start an end-to-end model with a real question.',tasks:['Pick a useful dataset','Define target and success metric','Identify risks and leakage','Plan the project in GitHub issues'],tags:['Project','ML']},
  {d:62,p:'Machine Learning',title:'ML project — baseline',desc:'Build the simplest valid baseline first.',tasks:['Clean the data','Split appropriately','Train a baseline model','Record baseline metrics'],tags:['Project','ML']},
  {d:63,p:'Machine Learning',title:'ML project — iteration',desc:'Feature engineering, model comparison and evaluation.',tasks:['Try 2–3 models','Engineer useful features','Compare metrics','Write why you chose the final approach'],tags:['Project','ML']},
  {d:64,p:'Machine Learning',title:'ML project — app interface',desc:'Expose your model through a simple user interface.',tasks:['Create an input form','Connect the prediction logic locally','Show useful output and confidence/context','Add a basic error state'],tags:['ML','Web','Build']},
  {d:65,p:'Machine Learning',title:'Milestone 4 — ML app',desc:'Ship a small ML-backed digital product prototype.',tasks:['Polish the UI','Write README and usage instructions','Record 3 limitations','Deploy the demo or provide a reproducible local run'],tags:['Milestone','ML','Product']},
  // Phase 5 — DL
  {d:66,p:'Deep Learning',title:'Neural network intuition',desc:'From neurons to layers, activations and loss.',tasks:['Review forward pass intuition','Review activation functions','Review loss functions','Explain backprop at a conceptual level'],tags:['DL']},
  {d:67,p:'Deep Learning',title:'Tensor basics',desc:'Get comfortable with tensors and shapes.',tasks:['Create tensors','Practice shape operations','Understand batching','Write 10 shape transformations'],tags:['DL','PyTorch']},
  {d:68,p:'Deep Learning',title:'Training loop',desc:'Understand optimizer, gradients, loss and epochs.',tasks:['Review forward → loss → backward → update','Train a tiny model','Observe training/validation curves','Diagnose one training issue'],tags:['DL','Training']},
  {d:69,p:'Deep Learning',title:'Regularization',desc:'Generalization, dropout, weight decay and early stopping.',tasks:['Review overfitting signs','Try dropout or weight decay','Use early stopping conceptually','Compare learning curves'],tags:['DL']},
  {d:70,p:'Deep Learning',title:'CNN intuition',desc:'Convolutions for image-like data.',tasks:['Understand kernels and feature maps','Build a tiny CNN','Track tensor shapes','Inspect common failure modes'],tags:['DL','CNN']},
  {d:71,p:'Deep Learning',title:'Transfer learning',desc:'Use pretrained representations instead of training from scratch.',tasks:['Load a pretrained model','Freeze/unfreeze layers conceptually','Fine-tune on a small dataset','Record why transfer learning helps'],tags:['DL','Transfer Learning']},
  {d:72,p:'Deep Learning',title:'Sequence models',desc:'Refresh RNN/LSTM/GRU ideas and why attention changed the field.',tasks:['Review sequence modeling','Understand vanishing gradients','Compare RNN/LSTM/GRU','Write a one-page concept summary'],tags:['DL','NLP']},
  {d:73,p:'Deep Learning',title:'Attention intuition',desc:'Understand queries, keys, values without getting lost in math.',tasks:['Explain attention in plain language','Understand self-attention','Trace a tiny attention example','Connect attention to Transformers'],tags:['DL','Transformers']},
  {d:74,p:'Deep Learning',title:'Transformer architecture',desc:'Embeddings, positional information, attention blocks and decoding.',tasks:['Review encoder vs decoder','Understand token embeddings','Understand multi-head attention','Draw a transformer block from memory'],tags:['DL','Transformers']},
  {d:75,p:'Deep Learning',title:'Fine-tuning mindset',desc:'When to prompt, retrieve or fine-tune.',tasks:['Compare prompting vs fine-tuning','Identify data needs','Review catastrophic forgetting concept','Write a decision checklist'],tags:['DL','GenAI']},
  {d:76,p:'Deep Learning',title:'DL project — classifier',desc:'Build a small neural-network classifier.',tasks:['Choose a manageable dataset','Build a baseline network','Train and evaluate it','Document one improvement'],tags:['DL','Project']},
  {d:77,p:'Deep Learning',title:'DL project — error analysis',desc:'Study model failures instead of only chasing accuracy.',tasks:['Collect wrong predictions','Group failure patterns','Inspect data quality','Propose one targeted fix'],tags:['DL','Project']},
  {d:78,p:'Deep Learning',title:'Model serving basics',desc:'Understand how a trained model becomes a usable feature.',tasks:['Wrap inference in a simple function/API','Define input/output schema','Handle invalid inputs','Test the endpoint or function'],tags:['DL','Deployment']},
  {d:79,p:'Deep Learning',title:'AI feature inside a web app',desc:'Turn a model capability into a user-facing experience.',tasks:['Choose one AI feature','Design the user flow','Implement the front-end state','Measure where the experience breaks'],tags:['AI','Web','UX']},
  {d:80,p:'Deep Learning',title:'Milestone 5 — intelligent prototype',desc:'Package an AI-powered experience people can actually try.',tasks:['Polish UX','Add loading/error/success states','Write a clear README','Capture a short demo GIF/video'],tags:['Milestone','AI','Product']},
  // Phase 6 — NLP
  {d:81,p:'NLP',title:'NLP foundations',desc:'Text normalization, vocabulary and representation.',tasks:['Review tokenization','Review stemming/lemmatization conceptually','Compare sparse vs dense representations','Process a small text dataset'],tags:['NLP']},
  {d:82,p:'NLP',title:'Embeddings',desc:'Understand how meaning can be represented as vectors.',tasks:['Review embedding intuition','Compare word vs sentence embeddings','Inspect similarity conceptually','Write 5 practical use cases'],tags:['NLP','Embeddings']},
  {d:83,p:'NLP',title:'Text classification',desc:'Build and evaluate a simple text classifier.',tasks:['Prepare labeled text','Create a baseline classifier','Evaluate with precision/recall/F1','Inspect failure examples'],tags:['NLP','ML']},
  {d:84,p:'NLP',title:'Sequence labeling',desc:'NER and token-level prediction at a practical level.',tasks:['Understand BIO tagging conceptually','Review NER examples','Try a pretrained NER pipeline','List product use cases'],tags:['NLP']},
  {d:85,p:'NLP',title:'Summarization + generation',desc:'Understand extractive vs generative approaches.',tasks:['Compare extractive and generative summaries','Try a small summarization workflow','Inspect poor summaries','Add human-quality checks'],tags:['NLP','GenAI']},
  {d:86,p:'NLP',title:'Retrieval basics',desc:'Search, chunking and relevance before generation.',tasks:['Define a small document collection','Chunk documents','Create a simple retrieval flow','Evaluate retrieved passages'],tags:['NLP','RAG']},
  {d:87,p:'NLP',title:'RAG foundations',desc:'Ground generation on external knowledge.',tasks:['Map query → retrieve → prompt → answer','Build a tiny RAG demo','Test 10 queries','Record hallucination/failure cases'],tags:['NLP','RAG','Project']},
  {d:88,p:'NLP',title:'RAG product UX',desc:'Good AI products need transparency and recovery paths.',tasks:['Show source/context when helpful','Add loading and retry states','Handle “I don’t know” cases','Write an evaluation checklist'],tags:['AI','UX','RAG']},
  {d:89,p:'NLP',title:'NLP mini-product',desc:'Create a useful text-based tool rather than a notebook-only demo.',tasks:['Choose one real user problem','Design the interaction','Implement the core NLP capability','Write a user-facing README'],tags:['NLP','Product','Build']},
  {d:90,p:'NLP',title:'Milestone 6 — NLP app',desc:'Ship a small text intelligence product.',tasks:['Polish UI and copy','Add test examples','Document limitations','Deploy a public demo where practical'],tags:['Milestone','NLP','Web']},
  // Phase 7 — GenAI + AI engineering
  {d:91,p:'GenAI',title:'LLM mental model',desc:'Tokens, context, inference and the practical limits of language models.',tasks:['Review tokens and context windows','Understand inference cost conceptually','Review hallucination causes','Write 5 rules for reliable LLM use'],tags:['GenAI']},
  {d:92,p:'GenAI',title:'Prompting patterns',desc:'Use structured prompts for repeatable outcomes.',tasks:['Practice role/context/instructions','Use examples','Use structured output formats','Create a reusable prompt template library'],tags:['GenAI','Prompting']},
  {d:93,p:'GenAI',title:'Structured outputs',desc:'Make model responses safe for software to consume.',tasks:['Define a JSON-like schema','Validate outputs conceptually','Handle malformed responses','Build one structured-output demo'],tags:['GenAI','APIs']},
  {d:94,p:'GenAI',title:'LLM API integration',desc:'Connect a model to a real application.',tasks:['Call an LLM API from a small app','Store secrets safely outside client code','Render streaming or progressive output','Handle rate/error states'],tags:['GenAI','Web','APIs']},
  {d:95,p:'GenAI',title:'Embeddings + vector search',desc:'Understand semantic search for product use cases.',tasks:['Generate embeddings','Store/search vectors conceptually','Compare keyword vs semantic search','Design one search feature'],tags:['GenAI','RAG']},
  {d:96,p:'GenAI',title:'RAG evaluation',desc:'Measure retrieval and answer quality instead of trusting demos.',tasks:['Create a 15-question eval set','Score retrieval quality','Score answer faithfulness','Log recurring failure modes'],tags:['GenAI','Evaluation']},
  {d:97,p:'GenAI',title:'Tool calling',desc:'Let models interact with functions and external data.',tasks:['Define one tool schema','Call a function from the model flow','Validate tool arguments','Handle tool failure safely'],tags:['GenAI','Agents']},
  {d:98,p:'GenAI',title:'Agents — when not to use them',desc:'Understand workflows vs agents and keep systems simple.',tasks:['Compare deterministic workflow vs agent','List agent failure modes','Design a simple workflow first','Convert only one step to a tool call'],tags:['GenAI','Agents']},
  {d:99,p:'GenAI',title:'AI app architecture',desc:'Think about frontend, backend, data, model and evaluation together.',tasks:['Draw your preferred AI app architecture','Define data flow','Define auth and secrets boundaries','List observability needs'],tags:['GenAI','Architecture']},
  {d:100,p:'GenAI',title:'AI product design',desc:'Design a feature around a user job, not around the model.',tasks:['Write the user problem','Define success and failure states','Design happy path and recovery path','Prototype the UX before coding'],tags:['Product','AI','UX']},
  {d:101,p:'GenAI',title:'AI app build — foundation',desc:'Start your flagship AI product.',tasks:['Choose a narrow problem','Create repo and basic UI','Implement app shell and data model','Write the first vertical slice'],tags:['Project','GenAI','Build']},
  {d:102,p:'GenAI',title:'AI app build — core feature',desc:'Implement the main intelligent behavior.',tasks:['Integrate model capability','Add context/retrieval/tool flow as needed','Create loading/error/success states','Test 10 realistic cases'],tags:['Project','GenAI']},
  {d:103,p:'GenAI',title:'AI app build — quality',desc:'Move beyond “it works on my example”.',tasks:['Create a small eval set','Improve prompts/retrieval/logic','Add guardrails and validation','Record before/after quality'],tags:['Project','Evaluation']},
  {d:104,p:'GenAI',title:'AI app build — polish',desc:'Make the product feel deliberate and usable.',tasks:['Improve UX copy','Fix responsive behavior','Add empty/loading/error states','Ask one person to try it'],tags:['Project','UX','Build']},
  {d:105,p:'GenAI',title:'Milestone 7 — GenAI product v1',desc:'Ship version one and write the postmortem.',tasks:['Deploy v1','Add README + demo','Write 5 product decisions you made','Write the next 3 iterations'],tags:['Milestone','GenAI','Product']},
  // Phase 8 — Product building, deployment, portfolio
  {d:106,p:'Product Building',title:'Web product foundations',desc:'HTML, CSS and JavaScript from a product-builder perspective.',tasks:['Review semantic HTML','Review responsive CSS patterns','Review DOM events/state','Rebuild one screen without copying a tutorial'],tags:['HTML','CSS','JS']},
  {d:107,p:'Product Building',title:'Modern frontend architecture',desc:'Components, state and data flow without overengineering.',tasks:['Sketch component boundaries','Separate UI from data logic','Design loading/error states','Refactor one existing screen'],tags:['Frontend','Architecture']},
  {d:108,p:'Product Building',title:'Backend + API fundamentals',desc:'Understand what the browser should and should not do.',tasks:['Review HTTP and REST basics','Understand request/response lifecycle','Create or consume one API','Document your endpoint contract'],tags:['Backend','APIs']},
  {d:109,p:'Product Building',title:'Database fundamentals',desc:'Persist real product data cleanly.',tasks:['Review tables and relationships','Design a small schema','Create CRUD flows conceptually','Add one useful query to your app'],tags:['SQL','Database']},
  {d:110,p:'Product Building',title:'Authentication + security basics',desc:'Build with basic security hygiene.',tasks:['Understand sessions/tokens conceptually','Use environment variables for secrets','Validate user input','List common browser-side security mistakes'],tags:['Security','Web']},
  {d:111,p:'Product Building',title:'Mobile product exploration',desc:'Learn how web/mobile product decisions differ.',tasks:['Study responsive vs native experiences','Sketch one mobile app flow','Choose a lightweight mobile stack','Build one screen or prototype'],tags:['Mobile','UX']},
  {d:112,p:'Product Building',title:'Deployment',desc:'Get comfortable putting your work online.',tasks:['Deploy a static site to GitHub Pages','Understand custom domains conceptually','Check mobile responsiveness','Document the deployment steps'],tags:['Deployment','GitHub Pages']},
  {d:113,p:'Product Building',title:'Analytics + feedback',desc:'Measure what people actually do.',tasks:['Define 3 product events','Add a lightweight analytics plan','Create a feedback form','Decide what signal would change your roadmap'],tags:['Product','Analytics']},
  {d:114,p:'Product Building',title:'SEO + landing pages',desc:'Learn the basics of discoverability and conversion.',tasks:['Write a clear value proposition','Create title/meta/semantic structure','Build a focused landing page','Add one social-proof or trust element'],tags:['SEO','Marketing','Web']},
  {d:115,p:'Product Building',title:'Pricing + monetization thinking',desc:'Connect product value to a business model.',tasks:['Define the user’s valuable outcome','Compare 2–3 pricing approaches','Estimate simple unit economics','Write what makes a paid plan worth it'],tags:['Business','Product']},
  {d:116,p:'Product Building',title:'Flagship project sprint',desc:'Choose the product you want to be known for.',tasks:['Define problem and target user','Freeze a tiny MVP scope','Create a feature checklist','Ship the first usable version'],tags:['Project','MVP','Build']},
  {d:117,p:'Product Building',title:'Flagship project sprint — iteration',desc:'Use feedback instead of adding random features.',tasks:['Test with at least one user','Fix the biggest friction point','Improve one key metric or workflow','Record what you intentionally did not build'],tags:['Project','UX']},
  {d:118,p:'Product Building',title:'Portfolio + GitHub polish',desc:'Make your work easy for another human to understand.',tasks:['Pin your strongest repositories','Write clear READMEs','Add live demo links/screenshots','Write a one-paragraph “what I build” profile'],tags:['Portfolio','GitHub']},
  {d:119,p:'Product Building',title:'Career narrative',desc:'Turn 120 days of learning into a coherent story.',tasks:['List your strongest skills','List 3 portfolio stories','Practice explaining one project in 2 minutes','Write a gap list for the next quarter'],tags:['Career','Communication']},
  {d:120,p:'Product Building',title:'Milestone 8 — review, ship, continue',desc:'Close the loop and choose the next 90-day direction.',tasks:['Review your 120-day dashboard','Export a progress backup','Publish your best project update','Choose the next 90-day specialization'],tags:['Milestone','Review','Portfolio']}
];

const MILESTONES = [
  {d:20,name:'Milestone 1 — First shipped artifact',label:'Foundation'},
  {d:35,name:'Milestone 2 — Analytics portfolio piece',label:'Data + Analytics'},
  {d:45,name:'Milestone 3 — BI story',label:'Business Intelligence'},
  {d:65,name:'Milestone 4 — ML portfolio',label:'Machine Learning'},
  {d:80,name:'Milestone 5 — DL system',label:'Deep Learning'},
  {d:90,name:'Milestone 6 — NLP app',label:'NLP'},
  {d:105,name:'Milestone 7 — GenAI product v1',label:'GenAI'},
  {d:120,name:'Milestone 8 — Flagship review + ship',label:'Product Builder'}
];
const ROADMAP_URL = 'https://youtu.be/r1qGTV3UyV4?si=Bt7f9tW348UqluU-';
const SHERYIANS_URL = 'https://www.youtube.com/@SheryiansAI';
const KEY = 'learnBuild120_v2';
const OLD_KEY = 'learnBuild120_v1';

const PHASE_COLORS = ['accent','warning','mint','purple'];
const PHASE_ORDER = [...new Set(ROADMAP.map(x=>x.p))];
const phaseIndex = p => PHASE_ORDER.indexOf(p);

function defaultDayRecord(){ return {
  checks:[], learned:'', practice:'', built:'', shipped:'', blockers:'', questions:[],
  learningHours:0, buildingHours:0, revisionHours:0, completed:false, status:'open', projectId:'', pinned:false
}; }
function defaultState(){
  return {
    version:3,
    theme:'dark',
    startDate:localISO(new Date()),
    dailyTarget:2,
    pace:'sequential',
    days:{},
    projects:[],
    weeklyReviews:{},
    revisionLog:{},
    knowledge:[],
    focusPlans:{},
    focusSessions:[],
    focusTimer:{running:false,startedAt:null,remainingSec:0,durationSec:0,category:'learning',day:1},
    questionStatus:{}
  };
}
function mergeRecord(r={}){
  const out={...defaultDayRecord(),...r};
  if(r.hours && !r.learningHours) out.learningHours=parseFloat(r.hours)||0;
  if(!Array.isArray(out.questions)) out.questions=[];
  if(!['open','completed','skipped'].includes(out.status)) out.status=out.completed?'completed':'open';
  if(out.completed) out.status='completed';
  return out;
}
function migrateState(raw){
  const base=defaultState();
  if(!raw || !raw.days) return base;
  const next={...base,...raw,version:3,days:{},projects:Array.isArray(raw.projects)?raw.projects:[],weeklyReviews:raw.weeklyReviews||{},revisionLog:raw.revisionLog||{},knowledge:Array.isArray(raw.knowledge)?raw.knowledge:[],focusPlans:raw.focusPlans&&typeof raw.focusPlans==='object'?raw.focusPlans:{},focusSessions:Array.isArray(raw.focusSessions)?raw.focusSessions:[],focusTimer:raw.focusTimer&&typeof raw.focusTimer==='object'?{...base.focusTimer,...raw.focusTimer}:base.focusTimer,questionStatus:raw.questionStatus&&typeof raw.questionStatus==='object'?raw.questionStatus:{}};
  Object.entries(raw.days||{}).forEach(([d,r])=>next.days[d]=mergeRecord(r));
  return next;
}
function loadState(){
  try{
    const current=localStorage.getItem(KEY);
    if(current) return migrateState(JSON.parse(current));
    const old=localStorage.getItem(OLD_KEY);
    if(old) return migrateState(JSON.parse(old));
  }catch(e){}
  return defaultState();
}
function saveState(){ localStorage.setItem(KEY, JSON.stringify(state)); }
function localISO(date){ const d=new Date(date.getTime()-date.getTimezoneOffset()*60000); return d.toISOString().slice(0,10); }
function parseDateISO(value){ return new Date(`${value||localISO(new Date())}T00:00:00`); }
function getDay(day){ return ROADMAP.find(x=>x.d===day); }
function getRecord(day){ return mergeRecord(state.days[day]); }
function dayDate(day){ const start=parseDateISO(state.startDate); start.setDate(start.getDate()+day-1); return start; }
function fmtDate(date){ return date.toLocaleDateString(undefined,{day:'numeric',month:'short',year:'numeric'}); }
function escapeHTML(str=''){ return String(str).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
function makeId(){ return (globalThis.crypto&&typeof globalThis.crypto.randomUUID==='function') ? globalThis.crypto.randomUUID() : `id-${Date.now()}-${Math.random().toString(36).slice(2,10)}`; }
function compact(str='',len=100){ const s=String(str).trim(); return s.length>len?s.slice(0,len-1)+'…':s; }
function getStatus(day){ const r=getRecord(day); return r.completed?'completed':r.status||'open'; }
function completedCount(){ return ROADMAP.filter(d=>getStatus(d.d)==='completed').length; }
function totalHours(){ return Object.values(state.days).reduce((s,r0)=>{const r=mergeRecord(r0);return s+(+r.learningHours||0)+(+r.buildingHours||0)+(+r.revisionHours||0)},0); }
function hoursSplit(){ return Object.values(state.days).reduce((s,r0)=>{const r=mergeRecord(r0);s.learn+=(+r.learningHours||0);s.build+=(+r.buildingHours||0);s.rev+=(+r.revisionHours||0);return s},{learn:0,build:0,rev:0}); }
function progressFor(day){ const d=getDay(day); if(!d) return 0; const r=getRecord(day); const checks=(r.checks||[]).filter(Boolean).length; return Math.round(checks/d.tasks.length*100); }
function currentDay(){
  if(state.pace==='calendar'){
    const days=Math.floor((Date.now()-parseDateISO(state.startDate).getTime())/86400000)+1;
    return Math.min(ROADMAP.length,Math.max(1,days));
  }
  const next=ROADMAP.find(d=>!['completed','skipped'].includes(getStatus(d.d)));
  return next?next.d:ROADMAP.length;
}
function currentStreak(){
  let latest=0; for(let i=ROADMAP.length;i>=1;i--){ if(getStatus(i)==='completed'){latest=i;break;} }
  if(!latest) return 0; let s=0; for(let i=latest;i>=1 && getStatus(i)==='completed';i--) s++; return s;
}
function longestStreak(){ let best=0,s=0; for(const d of ROADMAP){ if(getStatus(d.d)==='completed'){s++;best=Math.max(best,s)}else s=0; } return best; }
function milestoneCount(){ return MILESTONES.filter(m=>completedCount()>=m.d).length; }
function nextMilestone(){ return MILESTONES.find(m=>completedCount()<m.d); }
function weekForDay(day){ return Math.ceil(day/7); }
function weekRange(week){ const start=(week-1)*7+1; return {start,end:Math.min(ROADMAP.length,week*7)}; }
function totalWeeks(){ return Math.ceil(ROADMAP.length/7); }
function reviewKey(day,offset){ return `${day}-${offset}`; }
function dueReviews(){
  const cur=currentDay(); const items=[];
  for(const d of ROADMAP){
    if(getStatus(d.d)!=='completed') continue;
    for(const off of [1,3,7,21]){
      const reviewDay=d.d+off;
      if(reviewDay<=cur && reviewDay<=ROADMAP.length && !state.revisionLog[reviewKey(d.d,off)]){
        items.push({source:d.d,reviewDay,off});
      }
    }
  }
  return items.sort((a,b)=>a.reviewDay-b.reviewDay || a.source-b.source);
}
function markReview(item){
  state.revisionLog=state.revisionLog||{};
  state.revisionLog[reviewKey(item.source,item.off)]=new Date().toISOString();
  saveState(); refreshAll(); showToast(`Review logged for Day ${item.source}`);
}
function projectById(id){ return state.projects.find(p=>p.id===id); }
function generateDayFlow(d){
  const t=d?.tasks||[];
  return {
    learn:`Study + explain: ${t.slice(0,2).join(' · ') || 'Understand the key idea.'}`,
    practice:t[2]||'Do one focused exercise without copying a solution.',
    build:t[3]||`Create a tiny ${d?.tags?.[0]||'learning'} artifact.`,
    ship:'Leave evidence: commit it, screenshot it, publish it, or record a clear result.'
  };
}
function phaseStats(){
  return PHASE_ORDER.map((p,i)=>{
    const ds=ROADMAP.filter(d=>d.p===p);
    const done=ds.filter(d=>getStatus(d.d)==='completed').length;
    const hrs=ds.reduce((s,d)=>{
      const r=getRecord(d.d);
      return s+(+r.learningHours||0)+(+r.buildingHours||0)+(+r.revisionHours||0);
    },0);
    return {p,done,total:ds.length,pct:ds.length?Math.round(done/ds.length*100):0,hrs,i};
  });
}
function todayFocusPlan(day){
  const hasSaved=Array.isArray(state.focusPlans?.[day]);
  const saved=hasSaved?state.focusPlans[day]:[];
  const d=getDay(day);
  const fallback=[
    d?.tasks?.[0]||'Complete the most important learning task.',
    d?.tasks?.[1]||'Do one focused practice exercise.',
    generateDayFlow(d||{tasks:[],tags:['learning']}).build
  ];
  return Array.from({length:3},(_,i)=>({
    text:hasSaved?(saved[i]?.text||''):(fallback[i]||''),
    done:Boolean(saved[i]?.done)
  }));
}
function saveFocusPlan(day,items){
  state.focusPlans=state.focusPlans||{};
  state.focusPlans[day]=items.map(x=>({text:String(x.text||'').trim(),done:Boolean(x.done)}));
  saveState();
}
function todayLoggedHours(day=currentDay()){
  const r=getRecord(day);
  return (+r.learningHours||0)+(+r.buildingHours||0)+(+r.revisionHours||0);
}
function scheduledDay(){
  const days=Math.floor((Date.now()-parseDateISO(state.startDate).getTime())/86400000)+1;
  return Math.min(ROADMAP.length,Math.max(1,days));
}
function catchupInfo(){
  const scheduled=scheduledDay();
  const skipped=ROADMAP.filter(d=>getStatus(d.d)==='skipped');
  const openScheduled=ROADMAP.filter(d=>d.d<=scheduled && getStatus(d.d)==='open');
  if(state.pace==='calendar'){
    if(openScheduled.length) return {mode:'calendar',status:'behind',count:openScheduled.length,first:openScheduled[0].d,scheduled};
    return {mode:'calendar',status:'on-track',count:0,first:null,scheduled};
  }
  if(skipped.length) return {mode:'sequential',status:'skipped',count:skipped.length,first:skipped[0].d,scheduled};
  return {mode:'sequential',status:'next',count:0,first:currentDay(),scheduled};
}
function formatTimer(sec){
  const s=Math.max(0,Math.ceil(sec));
  const m=Math.floor(s/60), r=s%60;
  return `${String(m).padStart(2,'0')}:${String(r).padStart(2,'0')}`;
}
function activeTimerRemaining(){
  const t=state.focusTimer||{};
  if(!t.running) return Math.max(0,+t.remainingSec||0);
  const elapsed=(Date.now()-(+t.startedAt||Date.now()))/1000;
  return Math.max(0,(+t.remainingSec||0)-elapsed);
}
function focusCategoryLabel(key){ return ({learning:'Learning',building:'Building',revision:'Revision'}[key]||'Learning'); }
function logFocusSession(){
  const t=state.focusTimer;
  const durationSec=+t.durationSec||0;
  if(!durationSec) return;
  const day=t.day||currentDay();
  const field=`${t.category||'learning'}Hours`;
  const r=getRecord(day);
  r[field]=Math.round(((+r[field]||0)+(durationSec/3600))*100)/100;
  state.days[day]=r;
  state.focusSessions=state.focusSessions||[];
  state.focusSessions.push({id:makeId(),day,durationSec,category:t.category||'learning',completedAt:new Date().toISOString()});
  saveState();
}
function resetFocusTimer(){
  state.focusTimer={running:false,startedAt:null,remainingSec:0,durationSec:0,category:document.getElementById('focusCategory')?.value||'learning',day:currentDay()};
  saveState();
  renderFocusTimer();
}
function finishFocusTimer(){
  logFocusSession();
  const label=focusCategoryLabel(state.focusTimer.category);
  const day=state.focusTimer.day||currentDay();
  state.focusTimer={running:false,startedAt:null,remainingSec:0,durationSec:0,category:state.focusTimer.category||'learning',day:currentDay()};
  saveState(); refreshAll(); showToast(`Focus session logged · ${label} · Day ${day}`);
}
function startOrResumeFocusTimer(){
  const t=state.focusTimer||{};
  if(t.running){
    const remaining=activeTimerRemaining();
    state.focusTimer={...t,running:false,startedAt:null,remainingSec:remaining};
    saveState(); renderFocusTimer(); return;
  }
  let remaining=+t.remainingSec||0;
  let duration=+t.durationSec||0;
  const selected=parseInt(document.getElementById('focusDuration')?.value||'25',10);
  const category=document.getElementById('focusCategory')?.value||t.category||'learning';
  if(remaining<=0){ duration=Math.max(5,selected)*60; remaining=duration; }
  state.focusTimer={running:true,startedAt:Date.now(),remainingSec:remaining,durationSec:duration,category,day:currentDay()};
  saveState(); renderFocusTimer();
}
function selectFocusDuration(min){
  if(state.focusTimer?.running) return;
  const el=document.getElementById('focusDuration');
  if(el) el.value=String(min);
  state.focusTimer={...(state.focusTimer||{}),remainingSec:0,durationSec:0,category:document.getElementById('focusCategory')?.value||'learning',day:currentDay(),running:false,startedAt:null};
  saveState(); renderFocusTimer();
}
function renderFocusTimer(){
  const el=document.getElementById('focusTimerCard'); if(!el) return;
  const t=state.focusTimer||{};
  const remaining=activeTimerRemaining();
  const target=Math.max(0,+state.dailyTarget||0);
  const logged=todayLoggedHours(currentDay());
  const pct=target?Math.min(100,Math.round(logged/target*100)):0;
  const stateLabel=t.running?'In focus':remaining>0?'Paused':'Ready';
  const durationMin=t.durationSec?Math.round(t.durationSec/60):25;
  const timerPct=t.durationSec?Math.min(100,Math.max(0,Math.round((1-remaining/t.durationSec)*100))):0;
  el.innerHTML=`<div class="eyebrow">FOCUS SESSION</div>
    <div class="productivity-card-head"><div><div class="focus-title focus-timer-value" id="focusTimerValue">${formatTimer(remaining)}</div><div class="focus-desc" id="focusTimerState">${stateLabel} · sessions log directly to today’s hours.</div></div><span class="focus-state ${t.running?'active':''}" id="focusStateBadge">${t.running?'● LIVE':stateLabel.toUpperCase()}</span></div>
    <div class="timer-controls"><select id="focusCategory" ${t.running?'disabled':''}><option value="learning" ${t.category==='learning'?'selected':''}>Learning</option><option value="building" ${t.category==='building'?'selected':''}>Building</option><option value="revision" ${t.category==='revision'?'selected':''}>Revision</option></select><select id="focusDuration" ${t.running?'disabled':''}><option value="25" ${durationMin===25?'selected':''}>25 min</option><option value="50" ${durationMin===50?'selected':''}>50 min</option><option value="90" ${durationMin===90?'selected':''}>90 min</option></select></div>
    <div class="timer-presets"><button class="mini-btn" data-focus-duration="25" ${t.running?'disabled':''}>25m</button><button class="mini-btn" data-focus-duration="50" ${t.running?'disabled':''}>50m</button><button class="mini-btn" data-focus-duration="90" ${t.running?'disabled':''}>90m</button></div>
    <div class="timer-progress"><div id="focusTimerProgress" style="width:${timerPct}%"></div></div>
    <div class="small-row"><span>Today’s target</span><strong id="focusTargetText">${fmtHours(logged)} / ${fmtHours(target)} · ${pct}%</strong></div>
    <div class="progress-bar"><div id="focusTargetProgress" style="width:${pct}%"></div></div>
    <div class="timer-actions"><button class="primary-btn" id="focusStartBtn">${t.running?'Pause':remaining>0?'Resume':'Start focus'}</button><button class="ghost-btn" id="focusResetBtn">Reset</button></div>`;
}
function renderTodayTop3(){
  const el=document.getElementById('todayTop3Card'); if(!el) return;
  const day=currentDay(), plan=todayFocusPlan(day), done=plan.filter(x=>x.done&&x.text).length;
  el.innerHTML=`<div class="eyebrow">TODAY’S TOP 3</div>
    <div class="productivity-card-head"><div><div class="focus-title">Choose the three things that matter.</div><div class="focus-desc">Keep this small. The roadmap can contain four tasks; your day should have three priorities.</div></div><span class="top3-count">${done}/3</span></div>
    <div class="top3-list">${plan.map((x,i)=>`<div class="top3-item"><input type="checkbox" data-focus-check="${i}" ${x.done?'checked':''} aria-label="Complete priority ${i+1}"><input class="top3-input" data-focus-input="${i}" value="${escapeHTML(x.text)}" aria-label="Priority ${i+1}"></div>`).join('')}</div>
    <div class="top3-actions"><button class="ghost-btn" id="seedTop3Btn">Use today’s roadmap</button><span class="save-status">Saved automatically</span></div>`;
}
function renderCatchup(){
  const el=document.getElementById('catchupCard'); if(!el) return;
  const info=catchupInfo();
  let title='You’re on track',desc='',btn='Open today';
  if(info.status==='behind'){ title=`${info.count} scheduled day${info.count===1?'':'s'} to catch up`; desc=`Calendar pace has moved to Day ${info.scheduled}, but some earlier days are still open.`; btn=`Open Day ${info.first}`; }
  else if(info.status==='skipped'){ title=`${info.count} skipped day${info.count===1?'':'s'}`; desc='Skipped days stay available so you can deliberately catch up instead of losing the work.'; btn=`Reopen Day ${info.first}`; }
  else { desc=state.pace==='calendar'?`Scheduled for Day ${info.scheduled}. Your next open roadmap day is ${currentDay()}.`:'Sequential pace: finish today before moving to the next day.'; }
  el.innerHTML=`<div class="eyebrow">PACE CHECK</div><div class="focus-title">${title}</div><div class="focus-desc">${desc}</div><div class="catchup-meta"><span class="badge">${state.pace==='calendar'?'Calendar pace':'Sequential pace'}</span><span class="badge">Day ${currentDay()}</span></div><button class="secondary-btn catchup-btn" data-catchup-day="${info.first||currentDay()}">${btn}</button>`;
}
function tickFocusTimer(){
  const t=state.focusTimer||{};
  if(t.running && activeTimerRemaining()<=0){ finishFocusTimer(); return; }
  const value=document.getElementById('focusTimerValue');
  if(!value) return;
  const remaining=activeTimerRemaining();
  value.textContent=formatTimer(remaining);
  const timerPct=t.durationSec?Math.min(100,Math.max(0,Math.round((1-remaining/t.durationSec)*100))):0;
  const bar=document.getElementById('focusTimerProgress'); if(bar) bar.style.width=`${timerPct}%`;
}
function renderDashboard(){
  const done=completedCount(), pct=Math.round(done/ROADMAP.length*100), day=currentDay(), item=getDay(day), r=getRecord(day), hs=hoursSplit(), next=nextMilestone();
  document.getElementById('todayHeadline').textContent=`Day ${item.d} — ${item.title}`;
  document.getElementById('todaySubline').textContent=`${item.p} • ${fmtDate(dayDate(item.d))} • ${progressFor(day)}% checklist • ${getStatus(day)==='skipped'?'Skipped':''}`;
  document.getElementById('completedDays').textContent=`${done} / ${ROADMAP.length}`;
  document.getElementById('completedDaysPct').textContent=`${pct}% complete`;
  document.getElementById('streakCount').textContent=`${currentStreak()} day${currentStreak()===1?'':'s'}`;
  document.getElementById('longestStreak').textContent=`Longest: ${longestStreak()}`;
  document.getElementById('hoursLogged').textContent=`${fmtHours(totalHours())}`;
  document.getElementById('hoursBreakdown').textContent=`Learn ${fmtHours(hs.learn)} · Build ${fmtHours(hs.build)} · Rev ${fmtHours(hs.rev)}`;
  document.getElementById('milestoneCount').textContent=`${milestoneCount()} / ${MILESTONES.length}`;
  document.getElementById('milestoneNext').textContent=next?`Next: Day ${next.d} · ${next.label}`:'All 8 milestones complete';
  document.getElementById('ringPct').textContent=`${pct}%`;
  document.getElementById('ringProgress').style.strokeDashoffset=301.59-(301.59*pct/100);

  const checked=(r.checks||[]).filter(Boolean).length;
  const focus=document.getElementById('todayFocusCard');
  focus.innerHTML=`<div class="eyebrow">DAY ${item.d} • ${escapeHTML(item.p)}</div><div class="focus-title">${escapeHTML(item.title)}</div><div class="focus-desc">${escapeHTML(item.desc)}</div><div class="focus-badges">${item.tags.map(t=>`<span class="badge">${escapeHTML(t)}</span>`).join('')}<span class="badge">${getStatus(day)==='completed'?'✓ Complete':getStatus(day)==='skipped'?'↷ Skipped':'Open'}</span></div><div class="check-summary"><div class="small-row"><span>Checklist</span><span>${checked}/${item.tasks.length}</span></div><div class="progress-bar"><div style="width:${progressFor(item.d)}%"></div></div></div>`;

  const prev=Math.max(1,day-1), pr=getRecord(prev), pi=getDay(prev);
  document.getElementById('previousSummaryCard').innerHTML=day===1?`<div class="eyebrow">PREVIOUS DAY</div><div class="focus-title">This is Day 1.</div><div class="focus-desc">Today’s notes will appear here tomorrow. Write what you want your future self to remember.</div>`:`<div class="eyebrow">YESTERDAY • DAY ${prev}</div><div class="focus-title">${escapeHTML(pi.title)}</div><div class="focus-desc">${escapeHTML(compact(pr.learned||pr.built||'No note recorded yet.',175))}</div><div class="focus-badges"><span class="badge">${getStatus(prev)==='completed'?'✓ Complete':getStatus(prev)==='skipped'?'Skipped':'Open'}</span><span class="badge">${fmtHours((+pr.learningHours||0)+(+pr.buildingHours||0)+(+pr.revisionHours||0))}</span></div>`;

  const due=dueReviews().slice(0,4);
  document.getElementById('revisionQueueCard').innerHTML=`<div class="eyebrow">REVIEW QUEUE</div><div class="focus-title">${due.length?`${due.length} review${due.length===1?'':'s'} due`:'Nothing due'}</div><div class="focus-desc">Reviews are generated from completed days at 1, 3, 7 and 21-day intervals.</div>${due.length?`<div class="revision-list">${due.map(x=>`<div class="revision-item"><span>Day ${x.source} → +${x.off}d</span><button class="mini-btn" data-review-source="${x.source}" data-review-off="${x.off}">Done</button></div>`).join('')}</div>`:''}`;

  document.getElementById('phaseProgress').innerHTML=phaseStats().map(s=>`<div class="phase-card"><div class="eyebrow">PHASE ${s.i+1}</div><h3>${escapeHTML(s.p)}</h3><div class="phase-meta">${s.done}/${s.total} days · ${fmtHours(s.hrs)}</div><div class="progress-bar"><div style="width:${s.pct}%"></div></div><div class="small-row"><span>${s.pct}% complete</span><span>${s.done}/${s.total}</span></div></div>`).join('');
  document.getElementById('heatmap').innerHTML=ROADMAP.map(d=>{const st=getStatus(d.d), prg=progressFor(d.d), cur=d.d===day; return `<button class="hm-day ${st==='completed'?'done':st==='skipped'?'skipped':prg>0?'partial':''} ${cur?'current':''}" title="Day ${d.d} — ${escapeHTML(d.title)}" data-day="${d.d}" aria-label="Day ${d.d}"></button>`}).join('');
  renderTodayTop3(); renderFocusTimer(); renderCatchup();
  document.getElementById('dashboardProjects').innerHTML=renderProjectMiniCards();
  const recent=ROADMAP.slice(Math.max(0,day-3),Math.min(ROADMAP.length,day+2));
  document.getElementById('recentDays').innerHTML=recent.map(d=>{const rr=getRecord(d.d),st=getStatus(d.d);return `<div class="recent-day" data-day="${d.d}"><span class="day-num">DAY ${d.d} ${st==='completed'?'<span class="done-dot"></span>':''}</span><strong>${escapeHTML(d.title)}</strong><p>${escapeHTML(compact(rr.learned||rr.built||d.desc,95))}</p></div>`}).join('');
}
function renderProjectMiniCards(){
  if(!state.projects.length) return `<div class="empty-state">No projects yet. Create one and start attaching your learning days to real work.</div>`;
  return state.projects.slice(0,3).map(renderProjectCard).join('');
}
function renderProjectCard(p,large=false){
  return `<article class="project-card ${large?'large':''}" data-project-id="${p.id}"><div class="project-top"><span class="eyebrow">PROJECT</span><span class="project-status">${escapeHTML(p.status||'Idea')}</span></div><h3>${escapeHTML(p.name)}</h3><p class="project-description">${escapeHTML(p.problem||'No problem statement yet.')}</p><div class="small-row"><span>Progress</span><strong>${p.progress||0}%</strong></div><div class="progress-bar"><div style="width:${p.progress||0}%"></div></div>${large?`<div class="project-detail-grid"><div class="metric-box"><strong>NEXT ACTION</strong><span>${escapeHTML(p.next||'Define the next smallest step.')}</span></div><div class="metric-box"><strong>URL</strong><span>${p.url?`<a href="${escapeHTML(p.url)}" target="_blank" rel="noreferrer">Open link ↗</a>`:'Not added'}</span></div></div>`:''}<div class="project-actions"><button class="link-btn" data-edit-project="${p.id}">Edit</button>${p.url?`<a class="link-btn" href="${escapeHTML(p.url)}" target="_blank" rel="noreferrer">Open ↗</a>`:''}</div></article>`;
}
function renderRoadmap(){
  const list=document.getElementById('roadmapList'), q=(document.getElementById('searchInput').value||'').toLowerCase(), phase=document.getElementById('phaseFilter').value, status=document.getElementById('statusFilter').value;
  const rows=ROADMAP.filter(d=>{const r=getRecord(d.d),hay=[d.d,d.p,d.title,d.desc,...d.tasks,...d.tags].join(' ').toLowerCase();const st=getStatus(d.d);return (!q||hay.includes(q))&&(phase==='all'||d.p===phase)&&(status==='all'||(status==='completed'?st==='completed':status==='skipped'?st==='skipped':st!=='completed'&&st!=='skipped'))});
  document.getElementById('roadmapSummary').innerHTML=`<strong>${rows.length}</strong> of ${ROADMAP.length} days shown · ${completedCount()} completed · ${ROADMAP.filter(d=>getStatus(d.d)==='skipped').length} skipped · ${totalHours() ? fmtHours(totalHours()) : '0h'} logged`;
  list.innerHTML=rows.length?rows.map(d=>{const r=getRecord(d.d),st=getStatus(d.d);return `<div class="roadmap-row" data-day="${d.d}"><div class="roadmap-day">DAY ${d.d}</div><div><h3>${escapeHTML(d.title)}</h3><p>${escapeHTML(d.p)} • ${fmtDate(dayDate(d.d))}</p></div><div><p>${escapeHTML(d.desc)}</p></div><span class="status-pill ${st==='completed'?'done':st==='skipped'?'skipped':''}">${st==='completed'?'✓ Complete':st==='skipped'?'↷ Skipped':`${progressFor(d.d)}%`}</span><button class="row-arrow" title="Open day">›</button></div>`}).join(''):`<div class="empty-state">No days match those filters.</div>`;
}
function renderProjects(){
  const list=document.getElementById('projectsList'); list.innerHTML=state.projects.length?state.projects.map(p=>renderProjectCard(p,true)).join(''):`<div class="empty-state">You have no projects yet. Start with something tiny: a dashboard, utility, AI text tool, or mobile prototype.</div>`;
}
function renderReviews(){
  const due=dueReviews(); const allScheduled=ROADMAP.filter(d=>getStatus(d.d)==='completed').length*4; const doneReviews=Object.keys(state.revisionLog).length;
  document.getElementById('reviewScore').innerHTML=`<strong>${doneReviews}/${allScheduled||0}</strong><span>review checkpoints logged</span>`;
  document.getElementById('revisionDue').innerHTML=`<div class="eyebrow">DUE NOW</div><h3 style="margin:6px 0 0">${due.length?`${due.length} review${due.length===1?'':'s'} ready`:'No reviews due right now'}</h3><p class="muted">Open the source day to refresh your memory, then mark the review complete.</p>${due.length?`<div class="review-due-grid">${due.slice(0,12).map(x=>`<div class="revision-item"><span><strong>Day ${x.source}</strong> · ${escapeHTML(getDay(x.source).title)} · +${x.off}d</span><button class="mini-btn" data-review-source="${x.source}" data-review-off="${x.off}">Done</button></div>`).join('')}</div>`:''}`;
  document.getElementById('weeklyReviews').innerHTML=Array.from({length:totalWeeks()},(_,i)=>i+1).map(w=>{const rr=state.weeklyReviews[w]||{};const range=weekRange(w);const done=ROADMAP.slice(range.start-1,range.end).filter(d=>getStatus(d.d)==='completed').length;return `<article class="review-card" data-week="${w}"><div class="eyebrow">WEEK ${w}</div><h3>Days ${range.start}–${range.end}</h3><p>${done}/${range.end-range.start+1} days complete ${rr.next?`· Next outcome recorded`:''}</p><div class="small-row" style="margin-top:12px"><span>${rr.savedAt?'Reviewed':'Not reviewed'}</span><span>Open →</span></div></article>`}).join('');
}
function renderKnowledge(){
  const q=(document.getElementById('knowledgeSearch').value||'').toLowerCase().trim();
  const filter=document.getElementById('knowledgeFilter').value;
  const unresolvedDayIds=new Set();
  ROADMAP.forEach(d=>{
    const record=getRecord(d.d);
    if((record.questions||[]).some((_,i)=>!(state.questionStatus&&state.questionStatus[`${d.d}-${i}`]))) unresolvedDayIds.add(d.d);
  });
  const derived=ROADMAP.map(d=>({
    id:`day-${d.d}`,
    sourceDay:d.d,
    title:`Day ${d.d} — ${d.title}`,
    body:getRecord(d.d).learned,
    tags:d.tags,
    pinned:getRecord(d.d).pinned,
    derived:true
  })).filter(x=>x.body);
  const all=[...state.knowledge,...derived];
  const filtered=all.filter(x=>{
    const hay=[x.title,x.body,...(x.tags||[])].join(' ').toLowerCase();
    const matchesSearch=!q||hay.includes(q);
    const matchesFilter=
      filter==='all' ? true :
      filter==='pinned' ? !!x.pinned :
      filter==='questions' ? !!x.sourceDay && unresolvedDayIds.has(x.sourceDay) : true;
    return matchesSearch&&matchesFilter;
  });
  const list=document.getElementById('knowledgeList');
  list.innerHTML=filtered.length?filtered.map(x=>`<article class="knowledge-card"><div class="knowledge-head"><div><div class="eyebrow">${x.derived?'DAILY NOTE':'VAULT NOTE'}</div><h3>${escapeHTML(x.title)} ${x.pinned?'· 📌':''}</h3></div>${x.sourceDay?`<button class="link-btn" data-day="${x.sourceDay}">Open day</button>`:' '}</div><p>${escapeHTML(x.body)}</p><div class="tag-row">${(x.tags||[]).map(t=>`<span class="badge">${escapeHTML(t)}</span>`).join('')}</div></article>`).join(''):`<div class="empty-state"><strong>No knowledge notes match this view.</strong><span>Pin your best explanations from a day or add a fresh note.</span></div>`;
  renderQuestions();
}
function renderQuestions(){
  const list=document.getElementById('questionsList'); const questions=[];
  ROADMAP.forEach(d=>getRecord(d.d).questions.forEach((q,i)=>questions.push({id:`${d.d}-${i}`,day:d.d,text:q,resolved:false})));
  if(state.questionStatus) questions.forEach(q=>q.resolved=!!state.questionStatus[q.id]);
  const open=questions.filter(q=>!q.resolved);
  const countEl=document.getElementById('knowledgeQuestionCount');
  if(countEl) countEl.textContent=open.length;
  list.innerHTML=open.length?open.map(q=>`<div class="question-item"><div><p>${escapeHTML(q.text)}</p><small>Day ${q.day} · ${escapeHTML(getDay(q.day).title)}</small></div><button class="mini-btn" data-resolve-question="${q.id}">Resolve</button></div>`).join(''):`<div class="empty-state" style="padding:20px">No open questions 🎉</div>`;
}
function renderJournal(){
  const entries=ROADMAP.map(d=>({d,...getRecord(d)})).filter(x=>x.learned||x.practice||x.built||x.shipped||x.blockers||x.hours||x.completed||x.status==='skipped').reverse();
  document.getElementById('journalEntryCount').textContent=entries.length;
  const list=document.getElementById('journalList'); list.innerHTML=entries.length?entries.map(r=>`<article class="journal-entry"><div class="entry-head"><div><h3>Day ${r.d} — ${escapeHTML(getDay(r.d).title)}</h3><small>${fmtDate(dayDate(r.d))} • ${escapeHTML(getDay(r.d).p)} • ${getStatus(r.d)}</small></div><button class="link-btn" data-day="${r.d}">Open</button></div><div class="entry-grid"><div class="entry-box"><strong>LEARNED</strong><p>${escapeHTML(r.learned||'—')}</p></div><div class="entry-box"><strong>PRACTICED</strong><p>${escapeHTML(r.practice||'—')}</p></div><div class="entry-box"><strong>BUILT / SHIPPED</strong><p>${escapeHTML(r.shipped||r.built||'—')}</p></div><div class="entry-box"><strong>TIME</strong><p>Learn ${fmtHours(r.learningHours)} · Build ${fmtHours(r.buildingHours)} · Rev ${fmtHours(r.revisionHours)}</p></div></div></article>`).join(''):`<div class="empty-state">Your journal is empty. Open Day 1 and write a few lines.</div>`;
}
function populateFilters(){ const s=document.getElementById('phaseFilter'); PHASE_ORDER.forEach(p=>{const o=document.createElement('option');o.value=p;o.textContent=p;s.appendChild(o)}); }
function fmtHours(h){const n=+h||0;return `${Number.isInteger(n)?n:n.toFixed(2).replace(/0$/,'').replace(/\.0$/,'')}h`}
function setView(view){
  currentView=view;document.querySelectorAll('.view').forEach(v=>v.classList.remove('active-view'));document.getElementById(`${view}View`).classList.add('active-view');document.querySelectorAll('.nav-tab').forEach(b=>b.classList.toggle('active',b.dataset.view===view));
  document.getElementById('pageTitle').textContent={dashboard:'Dashboard',roadmap:'120-Day Roadmap',projects:'Projects',reviews:'Review Center',knowledge:'Knowledge Vault',journal:'Learning Journal'}[view]||'Dashboard';
  if(view==='dashboard')renderDashboard(); if(view==='roadmap')renderRoadmap(); if(view==='projects')renderProjects(); if(view==='reviews')renderReviews(); if(view==='knowledge')renderKnowledge(); if(view==='journal')renderJournal();
}
function saveDayRecordFromModal(){
  if(!activeDay)return; const r=getRecord(activeDay);r.checks=[...document.querySelectorAll('#dayTasks input')].map(c=>c.checked);r.learned=document.getElementById('learnedInput').value;r.practice=document.getElementById('practiceInput').value;r.built=document.getElementById('builtInput').value;r.shipped=document.getElementById('shippedInput').value;r.blockers=document.getElementById('blockersInput').value;r.questions=document.getElementById('questionsInput').value.split('\n').map(s=>s.trim()).filter(Boolean);r.learningHours=parseFloat(document.getElementById('learningHoursInput').value)||0;r.buildingHours=parseFloat(document.getElementById('buildingHoursInput').value)||0;r.revisionHours=parseFloat(document.getElementById('revisionHoursInput').value)||0;r.projectId=document.getElementById('dayProjectInput').value;r.pinned=document.getElementById('pinKnowledgeInput').checked;state.days[activeDay]=r;saveState();document.getElementById('saveStatus').textContent=`Saved ${new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})}`;
}
function openDay(day){
  activeDay=day;const d=getDay(day),r=getRecord(day),flow=generateDayFlow(d);document.getElementById('modalDayLabel').textContent=`DAY ${day}`;document.getElementById('dayModalTitle').textContent=d.title;document.getElementById('dayModalMeta').innerHTML=`<span class="badge">${escapeHTML(d.p)}</span><span class="badge">${fmtDate(dayDate(day))}</span>${d.tags.map(t=>`<span class="badge">${escapeHTML(t)}</span>`).join('')}`;document.getElementById('dayResources').innerHTML=`<a class="resource-link" href="${ROADMAP_URL}" target="_blank" rel="noreferrer">Roadmap video ↗</a><a class="resource-link" href="${SHERYIANS_URL}" target="_blank" rel="noreferrer">Sheryians AI School ↗</a>`;document.getElementById('learnPrompt').textContent=flow.learn;document.getElementById('practicePrompt').textContent=flow.practice;document.getElementById('buildPrompt').textContent=flow.build;document.getElementById('shipPrompt').textContent=flow.ship;document.getElementById('dayTasks').innerHTML=d.tasks.map((task,i)=>`<label class="task-item"><input type="checkbox" data-task-index="${i}" ${r.checks?.[i]?'checked':''}/><span>${escapeHTML(task)}</span></label>`).join('');document.getElementById('learnedInput').value=r.learned||'';document.getElementById('practiceInput').value=r.practice||'';document.getElementById('builtInput').value=r.built||'';document.getElementById('shippedInput').value=r.shipped||'';document.getElementById('blockersInput').value=r.blockers||'';document.getElementById('questionsInput').value=(r.questions||[]).join('\n');document.getElementById('learningHoursInput').value=r.learningHours||'';document.getElementById('buildingHoursInput').value=r.buildingHours||'';document.getElementById('revisionHoursInput').value=r.revisionHours||'';document.getElementById('pinKnowledgeInput').checked=!!r.pinned;
  document.getElementById('dayProjectInput').innerHTML=`<option value="">No project</option>${state.projects.map(p=>`<option value="${p.id}" ${r.projectId===p.id?'selected':''}>${escapeHTML(p.name)}</option>`).join('')}`;
  const done=r.completed, skipped=r.status==='skipped';document.getElementById('completeDayBtn').textContent=done?'Mark day incomplete':'Mark day complete';document.getElementById('skipDayBtn').classList.toggle('hidden',done||skipped);document.getElementById('reopenDayBtn').classList.toggle('hidden',!skipped);document.getElementById('saveStatus').textContent=skipped?'Day is skipped':'Saved automatically';document.getElementById('dayModal').classList.remove('hidden');
}
function closeModal(id){document.getElementById(id).classList.add('hidden');if(id==='dayModal')activeDay=null;}
function toggleDayComplete(){saveDayRecordFromModal();const r=getRecord(activeDay);r.completed=!r.completed;r.status=r.completed?'completed':'open';if(r.completed){r.checks=getDay(activeDay).tasks.map(()=>true);if(!r.shipped&&activeDay%5===0)r.shipped='Evidence not yet published — decide how to ship it.';}state.days[activeDay]=r;saveState();document.getElementById('completeDayBtn').textContent=r.completed?'Mark day incomplete':'Mark day complete';document.getElementById('skipDayBtn').classList.toggle('hidden',r.completed);showToast(r.completed?`Day ${activeDay} complete 🎉`:`Day ${activeDay} reopened`);refreshAll();}
function skipDay(){saveDayRecordFromModal();const r=getRecord(activeDay);r.completed=false;r.status='skipped';state.days[activeDay]=r;saveState();closeModal('dayModal');showToast(`Day ${activeDay} skipped — you can reopen it later`);refreshAll();}
function reopenDay(){const r=getRecord(activeDay);r.status='open';state.days[activeDay]=r;saveState();openDay(activeDay);showToast(`Day ${activeDay} reopened`);refreshAll();}
function openSettings(){document.getElementById('startDateInput').value=state.startDate||localISO(new Date());document.getElementById('dailyTargetInput').value=state.dailyTarget??2;document.getElementById('paceInput').value=state.pace||'sequential';document.getElementById('settingsModal').classList.remove('hidden');}
function saveSettings(){state.startDate=document.getElementById('startDateInput').value||localISO(new Date());state.dailyTarget=parseFloat(document.getElementById('dailyTargetInput').value)||2;state.pace=document.getElementById('paceInput').value||'sequential';saveState();closeModal('settingsModal');refreshAll();showToast('Settings saved');}
function openProjectModal(projectId=''){ editingProjectId=projectId||null;const p=projectById(projectId);document.getElementById('projectTitle').textContent=p?'Edit project':'New project';document.getElementById('projectNameInput').value=p?.name||'';document.getElementById('projectProblemInput').value=p?.problem||'';document.getElementById('projectStatusInput').value=p?.status||'Idea';document.getElementById('projectProgressInput').value=p?.progress||0;document.getElementById('projectProgressValue').textContent=`${p?.progress||0}%`;document.getElementById('projectUrlInput').value=p?.url||'';document.getElementById('projectNextInput').value=p?.next||'';document.getElementById('deleteProjectBtn').classList.toggle('hidden',!p);document.getElementById('projectModal').classList.remove('hidden');}
function saveProject(){const name=document.getElementById('projectNameInput').value.trim();if(!name){showToast('Give the project a name');return}const old=editingProjectId?projectById(editingProjectId):null;const p={id:editingProjectId||makeId(),name,problem:document.getElementById('projectProblemInput').value.trim(),status:document.getElementById('projectStatusInput').value,progress:+document.getElementById('projectProgressInput').value||0,url:document.getElementById('projectUrlInput').value.trim(),next:document.getElementById('projectNextInput').value.trim(),createdAt:old?.createdAt||new Date().toISOString()};if(old)Object.assign(old,p);else state.projects.push(p);saveState();closeModal('projectModal');refreshAll();showToast('Project saved');}
function deleteProject(){if(!editingProjectId)return;if(!confirm('Delete this project? Your day notes will remain.'))return;state.projects=state.projects.filter(p=>p.id!==editingProjectId);Object.values(state.days).forEach(r=>{if(r.projectId===editingProjectId)r.projectId=''});saveState();closeModal('projectModal');refreshAll();showToast('Project deleted');}
function openWeekly(week){editingWeek=week;const range=weekRange(week),rr=state.weeklyReviews[week]||{};const days=ROADMAP.slice(range.start-1,range.end);const done=days.filter(d=>getStatus(d.d)==='completed').length;const hrs=days.reduce((s,d)=>{const r=getRecord(d.d);return s+(+r.learningHours||0)+(+r.buildingHours||0)+(+r.revisionHours||0)},0);document.getElementById('weeklyLabel').textContent=`WEEK ${week}`;document.getElementById('weeklyTitle').textContent=`Days ${range.start}–${range.end}`;document.getElementById('weeklyStats').innerHTML=`<div class="review-stat"><span>Completed</span><strong>${done}/${days.length}</strong></div><div class="review-stat"><span>Hours</span><strong>${fmtHours(hrs)}</strong></div><div class="review-stat"><span>Projects</span><strong>${new Set(days.map(d=>getRecord(d.d).projectId).filter(Boolean)).size}</strong></div><div class="review-stat"><span>Milestone</span><strong>${done===days.length?'✓':'—'}</strong></div>`;document.getElementById('weeklyLearnedInput').value=rr.learned||'';document.getElementById('weeklyBuiltInput').value=rr.built||'';document.getElementById('weeklyReviseInput').value=rr.revise||'';document.getElementById('weeklyBlockersInput').value=rr.blockers||'';document.getElementById('weeklyNextInput').value=rr.next||'';document.getElementById('weeklySaveStatus').textContent=rr.savedAt?'Saved previously':'Not reviewed yet';document.getElementById('weeklyModal').classList.remove('hidden');}
function saveWeekly(){const r={learned:document.getElementById('weeklyLearnedInput').value,built:document.getElementById('weeklyBuiltInput').value,revise:document.getElementById('weeklyReviseInput').value,blockers:document.getElementById('weeklyBlockersInput').value,next:document.getElementById('weeklyNextInput').value,savedAt:new Date().toISOString()};state.weeklyReviews[editingWeek]=r;saveState();document.getElementById('weeklySaveStatus').textContent='Saved just now';renderReviews();showToast(`Week ${editingWeek} review saved`);}
function addKnowledge(){editingKnowledgeId=null;document.getElementById('knowledgeTitle').textContent='New knowledge note';document.getElementById('knowledgeTitleInput').value='';document.getElementById('knowledgeBodyInput').value='';document.getElementById('knowledgeTagsInput').value='';document.getElementById('knowledgePinnedInput').checked=false;document.getElementById('knowledgeModal').classList.remove('hidden');}
function saveKnowledge(){const title=document.getElementById('knowledgeTitleInput').value.trim(),body=document.getElementById('knowledgeBodyInput').value.trim();if(!title||!body){showToast('Add a title and explanation');return}state.knowledge.push({id:makeId(),title,body,tags:document.getElementById('knowledgeTagsInput').value.split(',').map(s=>s.trim()).filter(Boolean),pinned:document.getElementById('knowledgePinnedInput').checked,createdAt:new Date().toISOString()});saveState();closeModal('knowledgeModal');refreshAll();showToast('Knowledge note saved');}
function toggleFocusItem(index,checked){
  const day=currentDay(), plan=todayFocusPlan(day);
  plan[index]={...plan[index],done:checked};
  saveFocusPlan(day,plan); renderTodayTop3();
}
function updateFocusText(index,text){
  const day=currentDay(), plan=todayFocusPlan(day);
  plan[index]={...plan[index],text};
  state.focusPlans=state.focusPlans||{}; state.focusPlans[day]=plan.map(x=>({text:String(x.text||'').trim(),done:Boolean(x.done)}));
  saveState();
}
function seedTop3(){
  const d=getDay(currentDay()); if(!d) return;
  const items=(d.tasks||[]).slice(0,3).map((text,i)=>({text,done:false}));
  while(items.length<3) items.push({text:'',done:false});
  saveFocusPlan(currentDay(),items); renderTodayTop3(); showToast('Today’s Top 3 seeded from the roadmap');
}
function exportBackup(){const payload={app:'learn-build-120',version:3,exportedAt:new Date().toISOString(),state};const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`learn-build-120-backup-${localISO(new Date())}.json`;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),500);showToast('Backup exported');}
function importBackup(file){const reader=new FileReader();reader.onload=()=>{try{const payload=JSON.parse(reader.result);if(!payload.state||!payload.state.days)throw new Error('Invalid backup');state=migrateState(payload.state);saveState();applyTheme();refreshAll();showToast('Backup imported')}catch(e){showToast('That backup file is not valid')}};reader.readAsText(file);}
function applyTheme(){document.documentElement.dataset.theme=state.theme;document.getElementById('themeBtn').textContent=state.theme==='dark'?'☼':'☾';}
function showToast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');clearTimeout(showToast.t);showToast.t=setTimeout(()=>t.classList.remove('show'),1900);}
function refreshAll(){renderDashboard();renderRoadmap();renderProjects();renderReviews();renderKnowledge();renderJournal();}
function registerPWA(){if('serviceWorker' in navigator)navigator.serviceWorker.register('./sw.js').catch(()=>{});}
let state=loadState(),activeDay=null,currentView='dashboard',editingProjectId=null,editingWeek=null,editingKnowledgeId=null;
function bind(){
  populateFilters();applyTheme();refreshAll();registerPWA();
  document.addEventListener('click',e=>{
    const nav=e.target.closest('[data-view]'); if(nav){setView(nav.dataset.view);return;}
    const dayEl=e.target.closest('[data-day]'); if(dayEl && !e.target.closest('button[data-review-source]')){openDay(+dayEl.dataset.day);return;}
    const editProj=e.target.closest('[data-edit-project]'); if(editProj){openProjectModal(editProj.dataset.editProject);return;}
    const review=e.target.closest('[data-review-source]'); if(review){markReview({source:+review.dataset.reviewSource,off:+review.dataset.reviewOff});return;}
    const resolve=e.target.closest('[data-resolve-question]'); if(resolve){state.questionStatus=state.questionStatus||{};state.questionStatus[resolve.dataset.resolveQuestion]=true;saveState();refreshAll();showToast('Question marked resolved');return;}
    const focusCheck=e.target.closest('[data-focus-check]'); if(focusCheck){toggleFocusItem(+focusCheck.dataset.focusCheck,focusCheck.checked);return;}
    const focusPreset=e.target.closest('[data-focus-duration]'); if(focusPreset){selectFocusDuration(+focusPreset.dataset.focusDuration);return;}
    const catchup=e.target.closest('[data-catchup-day]'); if(catchup){openDay(+catchup.dataset.catchupDay);return;}
    const focusSeed=e.target.closest('#seedTop3Btn'); if(focusSeed){seedTop3();return;}
    const focusStart=e.target.closest('#focusStartBtn'); if(focusStart){startOrResumeFocusTimer();return;}
    const focusReset=e.target.closest('#focusResetBtn'); if(focusReset){resetFocusTimer();return;}
    const week=e.target.closest('[data-week]'); if(week){openWeekly(+week.dataset.week);return;}
    const close=e.target.closest('[data-close]'); if(close){closeModal({day:'dayModal',settings:'settingsModal',project:'projectModal',weekly:'weeklyModal',knowledge:'knowledgeModal'}[close.dataset.close]);return;}
  });
  document.getElementById('openTodayBtn').addEventListener('click',()=>openDay(currentDay()));
  document.getElementById('weeklyReviewBtn').addEventListener('click',()=>openWeekly(Math.min(totalWeeks(),weekForDay(currentDay()))));
  document.getElementById('openHeatmapBtn').addEventListener('click',()=>setView('roadmap'));
  document.getElementById('newProjectBtn').addEventListener('click',()=>openProjectModal());
  document.getElementById('newProjectBtn2').addEventListener('click',()=>openProjectModal());
  document.getElementById('addKnowledgeBtn').addEventListener('click',addKnowledge);
  document.getElementById('completeDayBtn').addEventListener('click',toggleDayComplete);
  document.getElementById('skipDayBtn').addEventListener('click',skipDay);
  document.getElementById('reopenDayBtn').addEventListener('click',reopenDay);
  document.getElementById('saveSettingsBtn').addEventListener('click',saveSettings);
  document.getElementById('saveProjectBtn').addEventListener('click',saveProject);
  document.getElementById('deleteProjectBtn').addEventListener('click',deleteProject);
  document.getElementById('projectProgressInput').addEventListener('input',e=>document.getElementById('projectProgressValue').textContent=`${e.target.value}%`);
  document.getElementById('saveWeeklyBtn').addEventListener('click',saveWeekly);
  document.getElementById('saveKnowledgeBtn').addEventListener('click',saveKnowledge);
  document.getElementById('settingsBtn').addEventListener('click',openSettings);
  document.getElementById('themeBtn').addEventListener('click',()=>{state.theme=state.theme==='dark'?'light':'dark';saveState();applyTheme();});
  document.getElementById('exportBtn').addEventListener('click',exportBackup);
  document.getElementById('importInput').addEventListener('change',e=>e.target.files[0]&&importBackup(e.target.files[0]));
  document.getElementById('resetBtn').addEventListener('click',()=>{if(confirm('Reset every day, note, project, review and question in this browser?')){state=defaultState();saveState();applyTheme();refreshAll();showToast('Progress reset');}});
  document.getElementById('searchInput').addEventListener('input',renderRoadmap);document.getElementById('phaseFilter').addEventListener('change',renderRoadmap);document.getElementById('statusFilter').addEventListener('change',renderRoadmap);document.getElementById('knowledgeSearch').addEventListener('input',renderKnowledge);document.getElementById('knowledgeFilter').addEventListener('change',renderKnowledge);
  ['learnedInput','practiceInput','builtInput','shippedInput','blockersInput','questionsInput','learningHoursInput','buildingHoursInput','revisionHoursInput','dayProjectInput','pinKnowledgeInput'].forEach(id=>{const el=document.getElementById(id);el.addEventListener('input',saveDayRecordFromModal);el.addEventListener('change',saveDayRecordFromModal);});
  document.addEventListener('input',e=>{ const input=e.target.closest('[data-focus-input]'); if(input) updateFocusText(+input.dataset.focusInput,input.value); });
  document.addEventListener('change',e=>{
    if(e.target.id==='focusCategory'){state.focusTimer={...(state.focusTimer||{}),category:e.target.value};saveState();return;}
    if(e.target.id==='focusDuration' && !state.focusTimer?.running){state.focusTimer={...(state.focusTimer||{}),remainingSec:0,durationSec:0,category:document.getElementById('focusCategory')?.value||'learning',day:currentDay(),running:false,startedAt:null};saveState();renderFocusTimer();}
  });
  document.querySelectorAll('[data-close]').forEach(e=>{});
  window.addEventListener('keydown',e=>{if(e.key==='Escape')['dayModal','settingsModal','projectModal','weeklyModal','knowledgeModal'].forEach(closeModal)});
}
document.addEventListener('DOMContentLoaded',()=>{bind();setInterval(tickFocusTimer,1000);});
