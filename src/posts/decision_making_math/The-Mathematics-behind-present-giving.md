---
path: "/posts/decision_making_math/The-Mathematics-behind-present-giving"
date: "June 14th 2020"
title: "The Mathematics behind choosing a present"
topic: "Math"
---
I'm sure we've all been in this scenario: we have to choose a present for a close friend or family for whatever reason, but we have no idea what to give them. 

[//]: # (Add an image or gif here)

Hence, we decide to go to a shopping mall to pick out a present for them. Ok, so now we've arrived at the shopping mall, but there's so many different shops selling so many different items, so what do we do now? We could walk around and visit every shop. Inside the shop, we would look around for different items, pick them up, and then spend some time figuring out if it would be a suitable present - evaluating the item, checking the price etc. This may take some time, you probably also have to backtrack to re-evalaute previous items in order to cross-compare different gifts.  

> The problem: this is pretty time-consuming and annoying

What if there was a more efficient way of choosing a present? Well of course there is, but the real question is, what if there was a more efficient of choosing an equally suitable present? This is where Math and Statistics come in. 

In reality, when we evaluate whether a gift is suitable or not, we actually consider several factors about the gift when making a decision. These can be roughly classified into: **price, aesthetics, recipient factor, functionality/practicality, giftability.** 

> What do these mean? 

<h2>Factors</h2>

**Price** is pretty easy, this is based on how much you want to spend on the gift. The more expensive an item is, the less inclined you are to buy it. As a matter of fact, the majority of my gift-choosing adventures is trying to find an un-crappy present that is as cheap as possible. 

Second is **aesthetics**. This is the appearance of the present. No matter how expensive, pratical a present is, any receiver of that present would rather have a version that looked more aesthetically pleasing than an ugly version. This is useful in situations where you are considering accessories, and the appearance of the item that you are buying is a major consideration. 

Third is the **recipient factor**. This is more of a wild card because it depends entirely on the person whom you are buying the gift for. In fact, there are probably many different sub-factors that affect this factor. For example: 
1. **Personal Preference** - Does the person like this kind of gift? Eg. giving an anime figurine to someone who hates anime is probably not a good idea. 
2. **Giftability** - This is the appropriateness of the gift, which is dependant upon your relationship with the person as well as the circumstances with which your giving it under. For example, giving underwear to someone of the opposite gender is straight up creepy unless you are in an intimate relationship. No matter how cheap it is, how good it looked, how much the person think it looks good, it is definitely not a good idea to choose underwear. Circumstances also matter. There are presents that are suitable and unsuitable for events such as Christmas, birthday, Valentines, wedding etc. This is all categorized under the giftability factor.
3. **Repetitions** - No matter how good a present is, the value of a gift will decline if you give it twice or more. It just shows that you couldn't be bothered to think of a present and decided to choose the same one. Don't be like those people that give the same presents during Christmas every year. 

Fourth is **functionality**. This looks at the practical uses of this gift and how it can help that person. For example, if that person broke his bicycle, and he often cycles to work, then buying a new bicycle would be an extremely good idea and would have high functionality points.

<h2>Converting to Numbers</h2>

So how do you decide how much each factor is worth? Let's say we were constructing an index, and we wanted to score each possible gift out of 100. I can then arbitrarily give some weights:
* Price = 30%
* Aesthetics = 15%
* Recipient Factor = 30%
* Functionality = 25%

Of course, these weights can change depending on each person. 

We can then use a general formula for indexing:
$$
\sum\limits_{i=1}^n score_i x_i = \text{score out of 100}
$$

Where $n$ is the number of factors that we are considering, $score_i$ is the score out of 1 that we are giving for that individual factor, and $x_i$ is the weight of that factor. So given our current parameters, it might look something like this:

$$
score_{P} * 30 + score_{A} * 15 + score_R * 30 + score_{F} * 25 = \text{Final Score}
$$

That looks great, but there's now a big question, how should we decide the score variable? 
I mentioned earlier that $score_i$ can be a variable that is given from 0 to 1. However, those of you who are smart will realize that there is a big problem with this. 

The fact is that in the real world, one detriment about a certain gift will severely affect its overall desirability. What this means is that even if you found the perfect gift such that not only was it super cheap to earn full points for price, it also looked very nice and was extremely pratical to earn full points on aesthetics and functionability. However, the recipient of this gift absolutely hates it, enough so to earn 0 points for the recipient factor. The overall result will end up being:
$$
1*30 + 1*15 + 0*30 + 1*25 = 70
$$

70 is honestly not that bad, in fact it seems pretty good to me. However, if you end up choosing this as you present, you need to get ready to cut ties with that person.

Another example could be a mansion. Aesthetics? Full marks. Recipient Factor? A normal person would give it full marks. Functionality? Well you can live in it, so full marks. Price? 0.

$$
0*30 + 1*15 + 1*30 + 1*25 = 70
$$

Again, 70 is honestly not that bad. If you were making your purchasing decisions purely based off of the numbers, you will suddenly find yourself in massive debt - which is bad. 

So as seen, there needs to be other ways to account for these extreme cases, and an easy solution is to scale the $score_i$ variable such that it accounts for these extreme solutions. 

Given all of this knowledge above, we can then move on to construct equations or algorithms to calculate the individual factor scores. 

<h2> Constructing Equations/Algorithms </h2>
<h4> Price </h4>

Price is easy. Money was originally a number invented in order to give a value to something, hence if we want to give a score based off of the price, then we only need to scale the actual pricetag of that gift. 




