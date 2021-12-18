# **"Trait Predictor Project" _by Nomads_**


## **Founders:** Henry Tirado, Scott Seely, Sushma Kesamsetty
---


## **Objective**:
---

Our Project objective was to develop the machine learning application that would predict the personality trait of a person as Introvert/Extrovert/Ambivert based on 91 personality questions. Our ML algorithm is trained based on survey with the same set of personality questions. 

![Personality-Survey](html/img/depan.jpg)


**_Introvert_**:  Introverts may prefer taking part in less stimulating activities and get pleasure from activities such as reading, writing or meditating.  Introverts typically prefer to concentrate on a single activity, analyze situations carefully and take time to think more before they speak.

**_Extrovert_**:  Extroverts usually prefer to seek out as much social interaction as possible because this is how they feel more energized. According to estimates, extroverts outnumber introverts by about three to one (Cain, 2012).

**_Ambivert_**:  Introversion/extroversion isn't an all-or-nothing trait; it's actually a continuum and some people might be very extroverted while others are less so.
An ambivert is a person who shows characteristics of both extroversion and introversion. In other words, they fall somewhere in the middle of the scale. People who are ambiverts are said to be moderately comfortable in social situations but also enjoy some solitary time.

---
## **Use Cases**:
---
Personality data has many commercial uses.
- Company hiring
- Dating sites
- Entertainment
- Career counseling

---
## **Configuration Requirements**:
---

Application expects DB configuration to fetch the survey data.

    Create a file "config.py" in the folder "code". Add and fill Username, Password, Host and Port in the file.
      driver='postgresql'
      username=
      password=
      host= 
      port= 
      database="postgres" 

---        
## **Library Requirements**:
---

- AWS RDS
- Postgresql
- Python
- Pandas
- HTML/CSS
- JavaScript
- D3
- Flask
- Matplotlib
- Tableau
- Scikit Learn
- Heroku
- Jupyter Notebook

---
## **Data Source**: 
---
- https://www.kaggle.com/yamqwe/introversionextraversion-scales

The questionaire contains 91 questions. The questions were presented one at a time in a random order. For each questions 3 values were recorded:



A - The user's selected response. 1=Disagree, 2=Slightly disagree, 3=Neutral, 4=Slightly agree, 5=Agree
I - The position of the question in the survey.
E - The time elapsed on that question in milliseconds.


![questions](images/Questions_all.png)

---
## **Visualization**:
---

Tableau

![tableau demographics](https://github.com/scottdseely/ML_Project/blob/main/images/Participant%20Demographics.png)

---
## **Application Design**:
---
![PredictorSays](https://user-images.githubusercontent.com/656837/146631316-01a3eccc-166f-420c-8e44-18dd7089fea2.png)(https://ie-predictor.herokuapp.com/)
---
### **Machine Learning**:
---

Our machine learning model uses Random Forest classifier to make the predictions based on user responses to the 91 personality questions. Personality of a person can be 1:Introvert, 2:Extrovert or 3:Ambivert. 

Accuracy of our predictions is approximately 72%.

![Conf Matrix](https://github.com/scottdseely/ML_Project/blob/main/images/ConfMatrix-Introvert-Extrovert-Ambivert.png)


![Elbow Plot ](https://github.com/scottdseely/ML_Project/blob/main/images/Elbow-plot-k-Means-Cluster.png)



## **References**:

