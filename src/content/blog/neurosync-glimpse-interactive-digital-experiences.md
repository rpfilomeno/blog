---
title: 'NeuroSync: Glimpse Interactive Digital Experiences'
description: |
  NeuroSync enables real-time facial animation in Unreal Engine 5 using audio, paving the way for interactive avatars and AI-driven experiences.
pubDate: 'Apr 7 2025'
coverImageCredit: Roger Filomeno
cover: 'https://cdn.rogverse.fyi/thorium_fUeraKV4lB.png'
---
[NeuroSync](https://neurosync.info/) is an open-source project enabling real-time facial animation from audio, integrating directly with Unreal Engine 5. This technology simplifies the historically labor-intensive process of creating believable digital avatars.

## Real-Time Facial Animation in Unreal Engine 5

NeuroSync streams facial blendshapes into [Unreal Engine 5](https://www.unrealengine.com/en-US/) using audio input.

### How It Works

A transformer seq2seq model translates audio features into facial blendshape coefficients in real-time. This synchronizes a digital character's facial movements and expressions with their speech.

### Local Control and Integration

NeuroSync offers a [Local API](https://github.com/AnimaVR/NeuroSync_Local_API), allowing developers to host the model on their own hardware for reduced latency and greater control.

Integration uses the [LiveLink API](https://docs.unrealengine.com/5.3/en-US/livelink-in-unreal-engine/). The [NeuroSync Player](https://github.com/AnimaVR/NeuroSync_Player) streams animation data—leveraging Apple's ARKit blendshapes—directly into the engine.

![NeuroSync in Unreal Engine 5](https://cdn.rogverse.fyi/thorium_m0BM7Eu1AP.png)

## NeuroSync and Multimodal LLMs

Combining NeuroSync's animation with multimodal Large Language Models (LLMs) enables highly interactive gaming experiences.

While an LLM understands context and generates intelligent dialogue, NeuroSync handles the visual performance. This creates responsive NPCs that not only speak intelligently but emote realistically in real-time. Projects like [LLMR](https://arxiv.org/html/2309.12276v2) and [VIVRA](https://www.immersivecomputinglab.org/wp-content/uploads/2024/08/2024-ISMAR-AgentBehaviorGeneration.pdf) are already exploring these dynamic virtual interactions.

![LLM Powered NPC](https://cdn.rogverse.fyi/graphic-features-supported-convai-1.png)

## Digital Twins and the Metaverse

For initiatives like Meta's metaverse, realistic digital twins are essential. NeuroSync's audio-to-face technology enhances the visual fidelity of these avatars, making digital interactions feel more authentic.

## AI Avatars in Live Streaming

Unreal Engine 5's photorealism, combined with NeuroSync, blurs the line between human and AI streamers.

Current examples include:
*   **[Neurosama](https://en.wikipedia.org/wiki/Neuro-sama)**: An AI VTuber driving engagement through an LLM.
*   **[CodeMiko](https://en.wikipedia.org/wiki/CodeMiko)**: A human-controlled avatar (Youna Kang) using motion capture for high interactivity.

NeuroSync bridges these worlds, allowing AI-driven characters to possess the visual nuance of motion-captured avatars. This technology suggests a future where AI and human creators coexist, each offering distinct types of digital experiences.