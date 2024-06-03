---
layout: post
title:  "A Quick and Easy Overview of Logistic Regression"
date:   2024-06-01
categories: machine learning
---

**Logistic regression** is a particular type of **linear classifier**, 
where the goal is to predict the probability of a binary outcome (yes/no, true/false).

* Linear Classifier

A linear classifier utilies a linear function to separate classes by a line 
(or a hyperplane in higher dimensions): `z(x) = wx + b`:

<img src="/assets/posts/logistic-1.jpg" width="400"/>

Here, `w` is the weight vector and `b` is the bias term.

Since the fuction `z(x)` returnes a real number in the range `(-∞, +∞)`, we convert 
this output to a class decision `y = 'red diamond'` and `y = 'blue triangle'`
by applaing a threshold. 

For instance, let's consider a simple threshold equals 0:

* If `z(x) ≥ 0`, then we classify as _'red diamond'_, i.g., 
our prediction is `y = 'red diamond'`;
* If `z(x) < 0`, then we classify as _'blue triangle'_, i.g., 
our prediction is `y = 'blue triangle'`.