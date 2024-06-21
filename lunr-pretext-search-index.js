var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  My Website   copyright  "
},
{
  "id": "sec-summary-of-objectives",
  "level": "1",
  "url": "sec-summary-of-objectives.html",
  "type": "Section",
  "number": "1.1",
  "title": "QUAN 2010 Quiz Objectives",
  "body": " QUAN 2010 Quiz Objectives  (Note: These are subject to changes.)      Quiz 1       1a: Types of variables   I can classify a variable as Quantitative or Qualitative, as well as the subcategory Continuous, Discrete, Nominal or Ordinal.     1b: Visualizing Data   Given a sample of data, I can generate visualizations to represent its variables.        Quiz 2       2a: Centers of Data   Given a sample of data, I can identify or compute different measures of centrality.     2b: Variation of Data   Given a sample of data, I can identify or compute different measures of variation, identify outliers, and construct a box-and-whisker plot for the data.        Quiz 3       3a: Probability   I can compute probabilities of events, including compound events involving operations and probability of events involving conditional probabilities.     3b: Random Variables   I can compute probabilities from the probability distribution of a random variable, as well as compute the expectation, variance and standard deviation of a random variable.        Quiz 4       4a: Standard Normal Variables   I can compute probabilities given bounds, and bounds given probabilities for the standard normal variable.     4b: General Normal Distribution   I can compute probabilities given bounds, and bounds given probabilities for general normal variables.     4c: Binomial Distribution   I can compute probabilities for binomial random variables.        Quiz 5       5a: Confidence Intervals   I can find a confidence interval for the true proportion of a categorical variable, given a sample, and interpret the meaning of this interval.     5b: Size of Sample: Proportion   I can identify the sample size necessary for a confidence interval to have a given margin of error.        Quiz 6       6a: Hypothesis Testing   I can test a hypothesis about the true proportion of a categorical variable, given a sample: stating the null and alternative hypothesis, computing a p-value, explaining the meaning of the p-value and drawing a conclusion.     6b: Inference for Single Numerical Variables   I can perform hypothesis tests and compute confidence intervals for the means of numerical variables and explain the results.        Quiz 7       7a: Inference for Difference of Means of Numerical Variables   I can perform hypothesis tests and compute confidence intervals for the differences of means of numerical variables, and explain the results.     7b: Inference for paired Numerical Variables   I can perform hypothesis tests and compute confidence intervals for the means of differences of paired numerical variables, and explain the results.        "
},
{
  "id": "sec-quiz-1",
  "level": "1",
  "url": "sec-quiz-1.html",
  "type": "Section",
  "number": "1.2",
  "title": "Quiz 1 Example Problems",
  "body": " Quiz 1 Example Problems  Below are example problems for Quiz 1.      Solutions     Excel files and\/or written work for solutions:        Videos of Solutions:    Objective 1a:         Objective 1b:             "
},
{
  "id": "sec-quiz-2",
  "level": "1",
  "url": "sec-quiz-2.html",
  "type": "Section",
  "number": "1.3",
  "title": "Quiz 2 Example Problems",
  "body": " Quiz 2 Example Problems  Below are example problems for Quiz 2.      Solutions     Excel files and\/or written work for solutions:         Videos of Solutions:    Objective 2a:         Objective 2b:             "
},
{
  "id": "sec-quiz-3",
  "level": "1",
  "url": "sec-quiz-3.html",
  "type": "Section",
  "number": "1.4",
  "title": "Quiz 3 Example Problems",
  "body": " Quiz 3 Example Problems  Below are example problems for Quiz 3.      Solutions     Excel files and\/or written work for solutions:         Videos of Solutions:    Objective 3a:         Objective 3b:             "
},
{
  "id": "sec-quiz-4",
  "level": "1",
  "url": "sec-quiz-4.html",
  "type": "Section",
  "number": "1.5",
  "title": "Quiz 4 Example Problems",
  "body": " Quiz 4 Example Problems  Below are example problems for Quiz 4.      Solutions     Excel files and\/or written work for solutions:        Videos of Solutions:    Objective 4a:         Objective 4b:             "
},
{
  "id": "sec-quiz-5",
  "level": "1",
  "url": "sec-quiz-5.html",
  "type": "Section",
  "number": "1.6",
  "title": "Quiz 5 Example Problems",
  "body": " Quiz 5 Example Problems  Below are example problems for Quiz 5.      Solutions     Excel files and\/or written work for solutions:        Videos of Solutions:    Objective 5a:         Objective 5b:             "
},
{
  "id": "sec-quiz-6",
  "level": "1",
  "url": "sec-quiz-6.html",
  "type": "Section",
  "number": "1.7",
  "title": "Quiz 6 Example Problems",
  "body": " Quiz 6 Example Problems  Below are example problems for Quiz 6.      Solutions     Excel files and\/or written work for solutions:        Videos of Solutions:    Objective 6a:         Objective 6b:             "
},
{
  "id": "sec-quiz-7",
  "level": "1",
  "url": "sec-quiz-7.html",
  "type": "Section",
  "number": "1.8",
  "title": "Quiz 7 Example Problems",
  "body": " Quiz 7 Example Problems  Below are example problems for Quiz 7.      Solutions     Excel files and\/or written work for solutions:         Videos of Solutions:    Objective 7a:         Objective 7b:             "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
