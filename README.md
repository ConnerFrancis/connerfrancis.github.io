# [conr.xyz](https://www.conr.xyz)
My personal website built on [vue.js](#technologies) and [github pages](#technologies).

___

### The goal and reasons
The goal of this website is to create one that would host all of my projects, blog/posts/ramblings, and designs on one URL.
I also wanted all this done for free, so I make use of Github Pages free hosting and VueJS because it is a completely client-side website framework.

___

### Methods and techniques
Using VueJS and Github Pages become tricky at some points. My Github Pages was restricted to only hosting the site on the `master` branch, so many tools requiring the `gh-pages` branch for VueJS and Github Pages did not work for me.

To get VueJS to work with Github Pages, I host all source code on the [`dev`](https://github.com/ConnerFrancis/connerfrancis.github.io/tree/dev) branch. I build it like you normally would and this outputs the production site into the [`dist`](https://github.com/ConnerFrancis/connerfrancis.github.io/tree/dev/dist) folder. I also ensured that `.gitignore` did not ignore the `dist` folder to make sure it kept the `CNAME` and `README.md` files. I then push all changes onto the `dev` branch. Finally, I use a Node.JS tool called [`git-directory-deploy`](https://github.com/X1011/git-directory-deploy) to push the `dist` folder alone into the `master` branch.

*If you would like to have a script for this or see mine, refer to the [`bin/deploy`](https://github.com/ConnerFrancis/connerfrancis.github.io/blob/dev/bin/deploy) script in the `dev` branch.*

___

### External resources
###### Technologies
1. [VueJS](https://vuejs.org/)
2. [Github Pages](https://pages.github.com/)

###### Other
1. [Blue paint image](https://unsplash.com/photos/U49iMsUsBd8) (Photo by [Joel Filipe](https://unsplash.com/@joelfilip) on [Unsplash](https://unsplash.com/))