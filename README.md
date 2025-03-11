# Peter Mandell  - Human Chemical

## Overview

I added a custom tool within the ai-sdk framework to drive the sidebar functionality. Chats that mention visualizing a SMILES string trigger the *onTool* callback for *useChat*.

## Considerations

I spent a significant portion of this project familiarizing myself with the project structure, particularly [ai-sdk](https://sdk.vercel.ai/docs/introduction). I have never worked with it before, so it required a good amount of research. It is an awesome library that provides a ton of useful functionality that would be a pain to implement from scratch.

I quickly hit the rate limit for the Open AI API during my testing. I added $5 to my account to get around it.