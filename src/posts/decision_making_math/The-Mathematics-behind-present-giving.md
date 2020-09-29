---
path: "/posts/decision_making_math/The-Mathematics-behind-present-giving"
date: "June 14th 2020"
title: "The Mathematics behind choosing a present"
topic: "Math"
---
I'm sure we've all been in this scenario: we have to choose a present for a close friend or family for whatever reason, but we have no idea what to give them and we are afraid of disappointing them with a lackluster gift.


<p align="center">
<img src="https://github.com/khxia/khxia.github.io/blob/dev2/src/posts/decision_making_math/you-cant-be-serious-santa.gif?raw=true"></img>
</p>



Hence, we decide to go to a shopping mall to pick out a present for them. Ok, so now we've arrived at the shopping mall, but there's so many different shops selling so many different items, so what do we do now? We could walk around and visit every shop. Inside the shop, we would look around for different items, pick them up, and then spend some time figuring out if it would be a suitable present - evaluating the item, checking the price etc. This may take some time, you probably also have to backtrack to re-evalaute previous items in order to cross-compare different gifts.  

> The problem: this is pretty time-consuming and annoying

What if there was a more efficient way of choosing a present? Well of course there is, but the real question is, what if there was a more efficient of choosing an equally suitable present? This is where Math and Statistics come in. 

In reality, when we evaluate whether a gift is suitable or not, we actually consider several factors about the gift when making a decision. These can be roughly classified into: **price, aesthetics, recipient factor, and functionality**.

> What do these mean? 

<h2>Factors</h2>

**Price** is pretty easy, this is based on how much you want to spend on the gift. The more expensive an item is, the less inclined you are to buy it. As a matter of fact, the majority of my gift-choosing adventures is trying to find an un-crappy present that is as cheap as possible. 

Second is **aesthetics**. This is the appearance of the present. No matter how expensive, pratical a present is, any receiver of that present would rather have a version that looked more aesthetically pleasing than an ugly version. This is useful in situations where you are considering accessories, and the appearance of the item that you are buying is a major consideration. 

Third is the **recipient factor**. This is more of a wild card because it depends entirely on the person whom you are buying the gift for. In fact, there are probably many different sub-factors that affect this factor. For example: 
1. **Personal Preference** - Does the person like this kind of gift? Eg. giving an anime figurine to someone who hates anime is probably not a good idea. 
2. **Giftability** - This is the appropriateness of the gift, which is dependant upon your relationship with the person as well as the circumstances with which you're giving it under. For example, giving underwear to someone of the opposite gender is straight up creepy unless you are in an intimate relationship. No matter how cheap it is, how good it looked, how much the person think it looks good, it is definitely not a good idea to choose underwear. Circumstances also matter. There are presents that are suitable and unsuitable for events such as Christmas, birthday, Valentines, wedding etc. This is all categorized under the giftability factor.
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
score_{p} * 30 + score_{a} * 15 + score_{r} * 30 + score_{f} * 25 = \text{Final Score}
$$

or 

$$
score_{P} + score_{A} + score_{R} + score_{F}  = \text{Final Score}
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
<h3> Price </h3>

Price is easy. Money was originally a number invented in order to give a value to something, hence if we want to give a score based off of the price, then we only need to scale the actual pricetag of that gift. 

$$
score_{P} = \frac{k}{x + \frac{k}{30}}
$$

- $x$ is price
- $k$ is a constant
- $score_{P}$ is the score out of 30 that a gift gets for its pricetag

This model is a rough, but good estimate of the price score, where $x$ is the price of the present. We can see that if the price of the gift was 0, we would end up with a score of $30$, which is full marks. As the price increases from 0, the score scales down with an inverse relationship. $k$ is actually a constant of scaling that can be changed depending on what "expensive" and "cheap" means to you and the gift receiver. 
> For example, using $k = 500$ would mean that $score_{P}$ starts to become insignificantly low when the price reaches \$200 dollars. 

What this means is that the maximum price that you are willing to spend on a gift is around \$200 dollars. Naturally, this variable can, and should be changed to suit your spending budget and whatever currency you are using. Personally, I would be extremely hesistant on throwing \$200 USD down the drain for a gift unless it was for my mom or my non-existent girlfriend. 

HOWEVER. Just as we've discussed before, no situation allows for someone to buy a mansion as a normal gift because it is too expensive. Our current model, calculates the score so that even if a gift costs \$1 million dollars, it would stil only have score of 0. Similarly, if we were to consider a gift that cost \$0 and a gift that cost \$10, would that really make a different to us? They're both very cheap. 

Hence, it would be wise to add some boundaries and constraints to our calculation, it would look something like this: 

```python
def calculate_price_score(x):
    if x > 0 and x < 20:
        return 30
    elif x >= 20 and x < 200:
        return f(x)
    elif x >= 200:
        return -infinity
    else:
        print("Price has to be a positive number!")
        return -1
```

<br>
Where:

$$
f(x)= \frac{k}{x + \frac{k}{30}}
$$

Now, we have an algorithm that looks pretty solid for price.

<h3> Aesthetics </h3>

Aesthetics is a little hard. It is hard to quantify an abstract concept such as beauty. If it was possible then I would be rich.
The best we can do is make a rough average based on other people's opinions.

It would look something like this:

$$
score_{A} = \frac{1}{n}\sum\limits_{i=1}^n\frac{15}{100}\alpha_i
$$
- $n$ is the number of people surveyed
- $\alpha_i$ is the "aesthetic" score out of 100 that each person gives after evaluating the gift
- $score_{A}$ is the score out of 15 that a gift gets for its aesthetic value

This is calculation method is a little subjective, but we will take it. What it does is quite simple: Takes each person's score, rescale it out of 15, and then average them all out. Again, it is hard to give a numeric value to something that is heavily affected by individual opinion. 

<h3>Recipient Factor</h3>

The recipient factor is a little harder to calculate with just math. In fact, since we have previously used three sub-factors in our definition of the recipient factor, we must index the recipient factor out correspondingly.

$$
score_{R} = \frac{3}{10}(\frac{1}{3}s_{1} + \frac{1}{3}s_{2} + \frac{1}{3}s_{3})
$$
$$
score_{R} = \frac{1}{10}(s_{1} + s_{2} +s_{3})
$$

- $s_1$ is the personal preference score out of 100
- $s_2$ is the giftability score out of 100
- $s_3$ is the repetition score out of 100
- $score_{R}$ is the score out of 15 that a gift gets for its recipient factor

This is a pretty simple equation. It takes the $s_1$, $s_2$, $s_3$, averages them all out, and then rescales out of 30.

The real problem is how do we calculate $s_1$, $s_2$, $s_3$?

Using numbers to evalaute these factors would be quite hard. Hence, we need to resort to using a program to give a score. The most simple and effective method would be to use a list and check if an item exists in the list. For example:

```python
def calculate_s1(gift):
    favorites_list = ["shoes", "chocolate", "smartphone", "clothes", "jewellery"]
    mediocre_list = ["game console", "keyboard", "mug", "hat", "basketball", "cash"]
    hate_list = ["anime", "earphones", "stationary", "music", "painting", "keychain", "teddy bear"]

    for keyword in favorites_list:
        if keyword in gift:
            return 100

    for keyword in mediocre_list:
        if keyword in gift:
            return 50

    for keyword in hate_list:
        if keyword in gift:
            return -100
    
    return 0  
```
<br>

We could also use a similar program but with different lists to calculate $s_2$. Simply put convential presents in `favorites_list`, unconventional presents in `mediocre_list`, and downright unappropriate presents in `hate_list`. This will give us a very crude approximation for the personal preference score and the giftability score. It is also important to note that often times we will do this sort of analysis unconsciously in our head whenever we are choosing and browsing for gifts. Perhaps you may have also noticed it yourself whenever you pick up a present, you are thinking about whether or not the recipient will like this sort of thing and whether or not the gift is appropriate. Just goes to show how amazingly difficult it is to replicate good old common sense in mathematics. AI is the future I guess. 

$s_3$ on the other hand, is relatively easy to calculate.

$$
\text{Let n be the number of times you have gifted this same present before.} 
$$
$$
\text{ if } n = 0 \text{ then } s_3 = 100
$$

$$
\text{ if } n > 0  \text{ then } s_3 = -100*n
$$

What this definition basically says, is that for every time that you give the same gift to someone, your repetition score will go down by 100 times the number of repetitions. 


<h3>Functionality</h3>

Functionality is hard to determine through numbers alone. Some items are able to be "practically" used by some people, while other people may perceive an item to be completely useless to them. Hence, when giving a functionality score to a certain item that you are evaluating, the best option is to fall back onto your common sense and to give your own "functionality" score. But wait. Haven't we seen this sort of thing happen before? That's right, this is similar to when we were defining $score_{A}$ since aesthetics also relies on some sort of common sense. Hence, we can use the same model to predict a functionality score:

$$
score_{F} = \frac{1}{n}\sum\limits_{i=1}^n\frac{15}{100}\beta_i
$$
- $n$ is the number of people surveyed
- $\beta_i$ is the score out of 100 that each person gives for "practicality" after evaluating the gift
- $score_{G}$ is the score out of 15 that a gift gets for its functionality value


<h2>Conclusion</h2>

Now that we have methods for calculating $score_{P}$, $score_{A}$, $score_{R}$, $score_{F}$, we can calculate the final score using our original equation.

$$
score_{P} + score_{A} + score_{R} + score_{F}  = \text{Final Score}
$$

With this, we have a rough estimation that will help our decision-making when choosing a present to give to somebody.

That being said, this is a very imprecise model. In a perfect world where everything is precisely planned out, we would be able to collate all of these functions into a single program, mindlessly run the program on every gift when we have the data, and then pick the gift with the highest score without having to use our precious brainpower and time at all. But, beggers can't be choosers. Although this model cannot be said to be 100% accurate, it takes relatively little effort to set up and to run. All in all, I hope aspects of this model will aid you in your gift choosing endeavours.


<p align="center">
<img src="https://github.com/khxia/khxia.github.io/blob/dev2/src/posts/decision_making_math/k-on.gif?raw=true"></img>
</p>