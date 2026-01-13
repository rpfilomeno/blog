---
title: 'Interacting Minds'
description: |
  A Research Paper on Multi-Modal/MOE AI Agent Collaboration
pubDate: 'Apr 14 2025'
coverImageCredit: Roger Filomeno
cover: 'https://cdn.rogverse.fyi/thorium_AQiqDg6HAp.png'
---
## **1. Introduction**

AI agents have evolved from rudimentary models to sophisticated entities capable of autonomous action. Unlike traditional models requiring direct prompting, agents operate independently to achieve predefined objectives.<sup>1</sup>

Two key advancements drive this evolution:
1.  **Multi-modal capabilities**: Agents can process text, images, audio, and video, allowing for versatile application in complex scenarios.<sup>1</sup>
2.  **Mixture of Experts (MOE)**: This architecture divides large models into specialized sub-networks ("experts"), managed by a gating network. This increases capacity and efficiency without proportional computational costs.<sup>5,8</sup>

The convergence of these technologies enables multi-agent systems where autonomous, multi-modal MOE agents collaborate on complex problems.<sup>1</sup>

## **2. Foundations**

### **2.1 Multi-Modal AI Agents**

An AI agent acts upon its environment to perform tasks autonomously.<sup>1</sup> Multi-modal agents process diverse data types (text, audio, video) to generate refined outputs. For example, an agent might create an image based on both a textual description and an audio file.<sup>1</sup>

Applications extend to augmented reality (AR), where agents observe user actions to provide proactive assistance,<sup>9</sup> and healthcare, where they analyze biological data layers for precise diagnoses.<sup>1</sup>

### **2.2 Mixture of Experts (MOE) Models**

MOE models address the computational challenges of large models by using specialized sub-networks.<sup>5</sup> A gating network selects the appropriate expert for each input, similar to a manager assigning tasks to specialists.<sup>6</sup>

**Advantages:**
*   **Efficiency**: Only relevant experts are activated (conditional computation).<sup>7</sup>
*   **Scalability**: Allows for larger model capacity with manageable resources.<sup>12</sup>
*   **Specialization**: Experts focus on specific problem domains.<sup>6</sup>

**Table 1: Comparison of Dense and MoE Models**

| Feature | Dense Models | MoE Models |
| :--- | :--- | :--- |
| **Parameters (Active)** | Equal to total | Significantly smaller than total |
| **Inference Cost** | High | Significantly lower |
| **Sparsity** | None | High (via gating) |

## **3. Inter-Agent Communication**

Effective collaboration requires robust communication protocols:

*   **Natural Language**: Leverages LLMs for intuitive exchange of goals and feedback.<sup>1</sup>
*   **Structured Data (JSON/XML)**: Ensures precision for task-specific information.<sup>13</sup>
*   **Agent Communication Languages (ACLs)**: Formal protocols (e.g., FIPA-ACL) using performatives for semantic richness.<sup>15</sup>
*   **Emergent Communication**: Spontaneous protocols developed by agents in reinforcement learning environments.<sup>18</sup>

**Standardization Efforts:**
*   **Agent2Agent (A2A)**: Standardizes secure information exchange across platforms.<sup>13</sup>
*   **Model Context Protocol (MCP)**: Connects AI agents to external data sources.<sup>20</sup>
*   **Agent Protocol**: Defines API endpoints for agent interaction.<sup>22</sup>

## **4. Collaboration Strategies**

Key strategies for achieving complex goals include:

*   **Task Decomposition**: Breaking high-level objectives into prioritized sub-tasks.<sup>1</sup>
*   **Role Specialization**: Assigning agents to roles based on expertise (e.g., demand forecasting vs. fulfillment).<sup>27</sup>
*   **Knowledge Sharing**: Exchanging insights via shared ontologies.<sup>29</sup>
*   **Coordination Mechanisms**: Ranging from centralized supervisors (Amazon Bedrock) to decentralized peer interaction.<sup>28</sup>
*   **Iterative Refinement**: Cooperative agents scrutinizing and improving each other's outputs (Mixture of Agents).<sup>36</sup>

## **5. Benefits of Autonomous Interaction**

*   **Efficiency**: Automates multi-step workflows, reducing completion times.<sup>38</sup>
*   **Scalability**: Dynamic addition/removal of agents to handle load.<sup>17</sup>
*   **Accuracy**: Cross-verification of data from diverse sources.<sup>35</sup>
*   **Availability**: 24/7 continuous operation.<sup>40</sup>
*   **Cost Reduction**: Optimizes resource allocation and minimizes manual labor.<sup>39</sup>

## **6. Challenges: Efficiency, Privacy, and Security**

*   **Efficiency**: Communication overhead and synchronization can create bottlenecks.<sup>7</sup>
*   **Privacy**: Autonomous access to sensitive data raises exposure risks. Privacy-preserving techniques are essential.<sup>48</sup>
*   **Security**: Agents are targets for adversarial manipulation. Robust authentication and monitoring are required.<sup>52</sup>
*   **Ethics**: Bias in training data and lack of explainability challenge responsible deployment.<sup>47</sup>

## **7. Autonomous Negotiation**

Agents must reach agreements without human intervention using:

*   **Intent Recognition**: Inferring goals from actions.<sup>63</sup>
*   **Negotiation Protocols**: Rules for proposals and counter-offers (e.g., contract net).<sup>15</sup>
*   **Game Theory**: Modeling strategic interactions (Nash Equilibrium).<sup>70</sup>
*   **Multi-Agent Reinforcement Learning (MARL)**: Learning negotiation policies through experience.<sup>81</sup>

## **8. Human Oversight**

Human involvement remains critical for:
*   **Ethical Alignment**: Ensuring actions align with human values.<sup>60</sup>
*   **Safety**: Preventing critical errors in high-stakes domains.<sup>44</sup>
*   **Compliance**: Adhering to legal standards.<sup>44</sup>
*   **Trust**: Providing transparency and control.<sup>105</sup>

## **9. Advanced Communication: Function Calls and Code**

*   **Dynamic Function Calls**: Structured interaction with external tools to reduce ambiguity.<sup>114</sup>
*   **Code Exchange**: Sharing executable logic to leverage specialized capabilities.<sup>118</sup>

*Note: Code exchange introduces security risks requiring sandboxing and verification.<sup>19</sup>*

## **10. Cross-Entity Collaboration**

Collaboration between agents from different entities (e.g., Personal vs. Corporate) requires:
*   **Preference Signaling**: Communicating user constraints and priorities.<sup>95</sup>
*   **Strategic Negotiation**: Advocating for user interests while seeking agreement.<sup>96</sup>
*   **Privacy Preservation**: Using techniques like federated learning to share insights without exposing raw data.<sup>48</sup>

## **11. Applications**

*   **Scheduling**: Intelligent coordination of calendars.<sup>41</sup>
*   **Customer Service**: collaborative resolution of complex inquiries.<sup>124</sup>
*   **Supply Chain**: Optimization of forecasting and logistics.<sup>127</sup>
*   **Industrial Automation**: Predictive maintenance and robotic coordination.<sup>130</sup>
*   **Contract Negotiation**: Autonomous securing of optimal terms.<sup>93</sup>

## **12. Conclusion**

The autonomous interaction of multi-modal MOE AI agents represents a significant leap in AI capability. By combining versatile perception, specialized processing, and collaborative strategies, these systems can tackle problems previously insurmountable. Realizing this potential requires addressing challenges in security, privacy, and ethics, and establishing robust standards for interoperability.

#### **Works cited**

1. AI Interactivity (Part I): AI Agents and Multimodal Agents - Tensility Venture Partners, <https://www.tensilityvc.com/insights/ai-interactivity-part-i-ai-agents-and-multimodal-agents>

2. Top 10 Research Papers on AI Agents (2025) - Analytics Vidhya, <https://www.analyticsvidhya.com/blog/2024/12/ai-agents-research-papers/>

3. Multimodality, Tool Use, and Autonomous Agents: Large Language Models Explained, Part 3 | Center for Security and Emerging Technology, <https://cset.georgetown.edu/article/multimodality-tool-use-and-autonomous-agents/>

4. \[2306.13549] A Survey on Multimodal Large Language Models - arXiv, <https://arxiv.org/abs/2306.13549>

5. www\.datacamp.com, <https://www.datacamp.com/blog/mixture-of-experts-moe#:~:text=Mixture%20of%20Experts%20(MoE)%20is,best%20expert%20for%20each%20input.>

6. What Is Mixture of Experts (MoE)? How It Works, Use Cases & More | DataCamp, <https://www.datacamp.com/blog/mixture-of-experts-moe>

7. Mixture of Experts: Advancing AI Agent Collaboration and Decisions - Akira AI, <https://www.akira.ai/blog/mixture-of-experts-for-ai-agents>

8. What is mixture of experts? | IBM, <https://www.ibm.com/think/topics/mixture-of-experts>

9. YETI (YET to Intervene) Proactive Interventions by Multimodal AI Agents in Augmented Reality Tasks - Google Research, <https://research.google/pubs/yeti-yet-to-intervene-proactive-interventions-by-multimodal-ai-agents-in-augmented-reality-tasks/>

10. survey on multimodal large language models | National Science Review - Oxford Academic, <https://academic.oup.com/nsr/article/11/12/nwae403/7896414>

11. Mixture of Experts LLMs: Key Concepts Explained - neptune.ai, <https://neptune.ai/blog/mixture-of-experts-llms>

12. \[R] New Paper on Mixture of Experts (MoE) : r/MachineLearning - Reddit, <https://www.reddit.com/r/MachineLearning/comments/1erv2sn/r_new_paper_on_mixture_of_experts_moe/>

13. Announcing the Agent2Agent Protocol (A2A) - Google for Developers Blog, <https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/>

14. How do AI agents communicate with other agents? - Milvus, <https://milvus.io/ai-quick-reference/how-do-ai-agents-communicate-with-other-agents>

15. Agent Communication Protocols: An Overview - SmythOS, <https://smythos.com/ai-agents/ai-agent-development/agent-communication-protocols/>

16. Comparing Agent Communication Languages and Protocols: Choosing the Right Framework for Multi-Agent Systems - SmythOS, <https://smythos.com/ai-agents/ai-agent-development/agent-communication-languages-and-protocols-comparison/>

17. What is AI Agent Communication? - IBM, <https://www.ibm.com/think/topics/ai-agent-communication>

18. Interpretation of Emergent Communication in Heterogeneous Collaborative Embodied Agents - CVF Open Access, <https://openaccess.thecvf.com/content/ICCV2021/papers/Patel_Interpretation_of_Emergent_Communication_in_Heterogeneous_Collaborative_Embodied_Agents_ICCV_2021_paper.pdf>

19. AI Agent Communication: Breakthrough or Security Nightmare? - Deepak Gupta, <https://guptadeepak.com/when-ai-agents-start-whispering-the-double-edged-sword-of-autonomous-agent-communication/>

20. A2A and MCP: Start of the AI Agent Protocol Wars? - Koyeb, <https://www.koyeb.com/blog/a2a-and-mcp-start-of-the-ai-agent-protocol-wars>

21. Introducing the Model Context Protocol - Anthropic, <https://www.anthropic.com/news/model-context-protocol>

22. The Rise of AI Agents and the Need for Standardized Protocols - Pynomial, <https://pynomial.com/2025/02/the-rise-of-ai-agents-and-the-need-for-standardized-protocols/>

23. The AI Agent Infrastructure Stack — Three Defining Layers: Tools, Data, and Orchestration, <https://www.madrona.com/ai-agent-infrastructure-three-layers-tools-data-orchestration/>

24. Agent Protocol, <https://agentprotocol.ai/>

25. Common interface for interacting with AI agents. The protocol is tech stack agnostic - you can use it with any framework for building agents. - GitHub, <https://github.com/AI-Engineer-Foundation/agent-protocol>

26. Top 7 Frameworks for Building AI Agents in 2025 - Analytics Vidhya, <https://www.analyticsvidhya.com/blog/2024/07/ai-agent-frameworks/>

27. What Are AI Agentic Workflows & How to Implement Them - Multimodal.dev, <https://www.multimodal.dev/post/ai-agentic-workflows>

28. Introducing multi-agent collaboration capability for Amazon Bedrock (preview) - AWS, <https://aws.amazon.com/blogs/aws/introducing-multi-agent-collaboration-capability-for-amazon-bedrock/>

29. Multi-Agent Collaboration Mechanisms: A Survey of LLMs - arXiv, <https://arxiv.org/html/2501.06322v1>

30. Knowledge Sharing AI Agent | ClickUp™, <https://clickup.com/p/ai-agents/knowledge-sharing>

31. Unleashing the Future of Knowledge Management with Agentic AI - Akira AI, <https://www.akira.ai/blog/ai-agent-for-knowledge-base>

32. Leveraging Multi-AI Agents for Cross-Domain Knowledge Discovery - arXiv, <https://arxiv.org/html/2404.08511v1>

33. How do multi-agent systems handle heterogeneous agents? - Milvus, <https://milvus.io/ai-quick-reference/how-do-multiagent-systems-handle-heterogeneous-agents>

34. Agent Communication and Ontologies - SmythOS, <https://smythos.com/ai-agents/agent-architectures/agent-communication-and-ontologies/>

35. Multimodal AI Agents: Reimaging Human-Computer Interaction - Akira AI, <https://www.akira.ai/blog/ai-agents-with-multimodal-models>

36. Exploring MoE and MoA for Smarter AI Solutions - PuppyAgent, <https://www.puppyagent.com/blog/Exploring-MoE-and-MoA-for-Smarter-AI-Solutions>

37. Mixture of Agents: An Emerging Approach in AI Methodologies - Dria, <https://dria.co/blog/mixture-of-agents:-an-emerging-approach-in-ai-methodologies>

38. What Are Intelligent AI Agents (And Can They Really Work Alone)? | Moveworks, <https://www.moveworks.com/us/en/resources/blog/what-is-intelligent-ai-agent-how-they-work-autonomously>

39. Autonomous AI Agents: Exploring Their Role - Neontri, <https://neontri.com/blog/autonomous-ai-agents/>

40. Autonomous Agent Frameworks - SmythOS, <https://smythos.com/ai-agents/agent-architectures/autonomous-agent-frameworks/>

41. Meeting Scheduler AI Agent | ClickUp™, <https://clickup.com/p/ai-agents/meeting-scheduler>

42. Multimodal AI Agent | ClickUp™, <https://clickup.com/p/ai-agents/multimodal>

43. Multi-agent Systems and Communication: Enabling Effective Interaction Between Agents, <https://smythos.com/ai-agents/multi-agent-systems/multi-agent-systems-and-communication/>

44. Preparing for the AI Agent Revolution: Navigating the Legal and Compliance Challenges of Autonomous Decision-Makers - StoneTurn, <https://stoneturn.com/insight/preparing-for-the-ai-agent-revolution/>

45. Privacy Concerns AI Agent | ClickUp™, <https://clickup.com/p/ai-agents/privacy-concerns>

46. Minding Mindful Machines: AI Agents and Data Protection Considerations, <https://fpf.org/blog/minding-mindful-machines-ai-agents-and-data-protection-considerations/>

47. Five privacy concerns around agentic AI | SC Media, <https://www.scworld.com/perspective/five-privacy-concerns-around-agentic-ai>

48. Unlocking the Potential of Agentic AI with Privacy-Enhancing Technologies - Duality Tech, <https://dualitytech.com/blog/unlocking-the-potential-of-agentic-ai-with-privacy-enhancing-technologies/>

49. Empowering Agentic AI Within Financial Systems Requires Zero-Knowledge Proofs and Privacy-Preserving Technologies | Chainlink Blog, <https://blog.chain.link/agentic-ai-in-finance/>

50. Secret Network and Project Zero Partner, <https://scrt.network/blog/secret-network-and-project-zero-partner>

51. AI Agents Need A Privacy Layer - Oasis Network, <https://oasisprotocol.org/blog/ai-agents-privacy-blockchain>

52. The Rise of AI Agents and the Security Challenges Ahead | Auth0, <https://auth0.com/blog/the-rise-of-ai-agents-and-the-security-challenges-ahead/>

53. The Identities Behind AI Agents: A Deep Dive Into AI & NHI - The Hacker News, <https://thehackernews.com/2025/04/the-identities-behind-ai-agents-deep.html>

54. Mitigating the Top 10 Vulnerabilities in AI Agents - XenonStack, <https://www.xenonstack.com/blog/vulnerabilities-in-ai-agents>

55. Challenges in Governing AI Agents - Lawfare, <https://www.lawfaremedia.org/article/challenges-in-governing-ai-agents>

56. Awesome-LLM-based-AI-Agents-Knowledge/8-4-communication.md at main - GitHub, <https://github.com/mind-network/Awesome-LLM-based-AI-Agents-Knowledge/blob/main/8-4-communication.md>

57. 5 Security Considerations for Managing AI Agents and Their Identities - Aembit, <https://aembit.io/blog/5-security-considerations-for-managing-ai-agents-and-their-identities/>

58. Understanding AI Agent Security - Promptfoo, <https://www.promptfoo.dev/blog/agent-security/>

59. The Future of Autonomous Agents: Trends, Challenges, and Opportunities Ahead, <https://smythos.com/ai-agents/agent-architectures/future-of-autonomous-agents/>

60. AI Agent Best Practices and Ethical Considerations | Writesonic, <https://writesonic.com/blog/ai-agents-best-practices>

61. The Ethical Challenges of AI Agents | Tepperspectives, <https://tepperspectives.cmu.edu/all-articles/the-ethical-challenges-of-ai-agents/>

62. Ethical considerations in deploying autonomous AI agents - Tech Edition, <https://www.techedt.com/ethical-considerations-in-deploying-autonomous-ai-agents>

63. Intent recognition in multi-agent systems: Cow herding - ResearchGate, <https://www.researchgate.net/publication/274205903_Intent_recognition_in_multi-agent_systems_Cow_herding>

64. Intent Recognition in Multi-Agent Systems: Collective Box Pushing and Cow Herding - CORE, <https://core.ac.uk/download/pdf/213404087.pdf>

65. Plan and Intent Recognition in a Multi-agent System for Collective Box Pushing, <https://www.researchgate.net/publication/274469749_Plan_and_Intent_Recognition_in_a_Multi-agent_System_for_Collective_Box_Pushing>

66. Prediction of Intent in Robotics and Multi-agent Systems | SciSpace, <https://scispace.com/pdf/prediction-of-intent-in-robotics-and-multi-agent-systems-2uazbh7zl0.pdf>

67. Negotiation Protocols for AI Agents - Matoffo, <https://matoffo.com/negotiation-protocols-for-ai-agents/>

68. accessed January 1, 1970, <https://www.researchgate.net/publication/343780350_Autonomous_Negotiation_in_Multi-Agent_Systems_Principles_and_Challenges>

69. Agent Communication and Negotiation: Enhancing Decision-Making and Collaboration in Multi-Agent Systems - SmythOS, <https://smythos.com/ai-agents/agent-architectures/agent-communication-and-negotiation/>

70. Multi-Agent Systems and Negotiation: Strategies for Effective Agent Collaboration, <https://smythos.com/ai-agents/multi-agent-systems/multi-agent-systems-and-negotiation/>

71. Conflict Resolution AI Agent | ClickUp™, <https://clickup.com/p/ai-agents/conflict-resolution>

72. Normative conflict resolution through human–autonomous agent interaction - University of York, <https://pure.york.ac.uk/portal/files/116793996/1-s2.0-S2666659625000101-main.pdf>

73. Dealing With Ethical Conflicts In Autonomous Agents And Multi-Agent Systems, <https://www.researchgate.net/publication/279258407_Dealing_With_Ethical_Conflicts_In_Autonomous_Agents_And_Multi-Agent_Systems>

74. Resolving Conflict in Decision-Making for Autonomous Driving - Robotics, <https://www.roboticsproceedings.org/rss17/p049.pdf>

75. How can multi-agent systems communicate? Is game theory the answer? - Capgemini USA, <https://www.capgemini.com/us-en/insights/expert-perspectives/how-can-multi-agent-systems-communicate-is-game-theory-the-answer/>

76. Agent-Based Modeling and Game Theory: Simulating Strategic Interactions in Complex Systems - SmythOS, <https://smythos.com/ai-industry-solutions/law/agent-based-modeling-and-game-theory/>

77. Game-theoretic LLM: Agent Workflow for Negotiation Games - arXiv, <https://arxiv.org/html/2411.05990v1>

78. Scientific approaches and techniques for negotiation : a game theoretic and artificial intelligence perspective - CWI, <https://ir.cwi.nl/pub/4448>

79. Game Theory (Stanford Encyclopedia of Philosophy), <https://plato.stanford.edu/entries/game-theory/#AI>

80. Game Theory in AI: The Nash Equilibrium EXPLAINED - YouTube, <https://www.youtube.com/watch?v=fbHl9AbcSic>

81. MARLIN: Multi-Agent Reinforcement Learning Guided by Language-Based Inter-Robot Negotiation - arXiv, <https://arxiv.org/html/2410.14383v3>

82. \[2410.14383] MARLIN: Multi-Agent Reinforcement Learning Guided by Language-Based Inter-Robot Negotiation - arXiv, <https://arxiv.org/abs/2410.14383>

83. Applying Multi-Agent Reinforcement Learning to Candidate/Employer Job Matching and Salary Negotiations | Computer Science and Economics, <https://csec.yale.edu/senior-essays/fall-2022/applying-multi-agent-reinforcement-learning-candidateemployer-job-matching>

84. Deep Reinforcement Learning Agent for Negotiation in Multi-Agent Cooperative Distributed Predictive Control - MDPI, <https://www.mdpi.com/2076-3417/13/4/2432>

85. MULTI-AGENT REINFORCEMENT LEARNING FOR COALITIONAL BARGAINING GAMES, <https://openreview.net/forum?id=OaZktJBVpUy>

86. A Deep Reinforcement Learning Approach to Concurrent Bilateral Negotiation - IJCAI, <https://www.ijcai.org/proceedings/2020/0042.pdf>

87. Towards Learning Multi-Agent Negotiations via Self-Play - CVF Open Access, <https://openaccess.thecvf.com/content_ICCVW_2019/papers/ADW/Tang_Towards_Learning_Multi-Agent_Negotiations_via_Self-Play_ICCVW_2019_paper.pdf>

88. Towards Learning Multi-Agent Negotiations via Self-Play, <https://machinelearning.apple.com/research/towards-learning-multi-agent-negotiations-via-self-play>

89. Single-Agent vs. Multi-Agent Techniques for Concurrent Reinforcement Learning of Negotiation Dialogue Policies - ACL Anthology, <https://aclanthology.org/P14-1047/>

90. accessed January 1, 1970, <https://arxiv.org/abs/2006.03753>

91. Unlock Savings with Autonomous Negotiation Agents (ANA) - Zycus, <https://www.zycus.com/solution/autonomous-negotiation-agents>

92. Negotiation Strategy AI Agent | ClickUp™, <https://clickup.com/p/ai-agents/negotiation-strategy>

93. AI Negotiation Agent | statworx®, <https://www.statworx.com/en/generative-ai-solutions/ai-negotiation-agent/>

94. AI-Powered Deals: How Autonomous Negotiation is Redefining Supply Chain Strategy, <https://supplychain360.io/autonomous-negotiation-revolutionizing-supply-chain-efficiency-2025-trends/>

95. Multi-AI Agents and How Business Can Prepare, <https://www.mri.co.jp/en/knowledge/article/202412_2.html>

96. The Role of Procurement: AI Agents for Contract Negotiation in Finance - Akira AI, <https://www.akira.ai/blog/ai-agents-for-contract-negotiation>

97. AI Lease Negotiation 2025 Ultimate Guide | Real Estate Deals - Rapid Innovation, <https://www.rapidinnovation.io/post/ai-agent-lease-negotiation-assistant>

98. AI Agents Are Transforming Healthcare Payer Interactions With Smart Negotiation, <https://www.thoughtful.ai/blog/ai-agents-are-transforming-healthcare-payer-interactions-with-smart-negotiation>

99. Understanding Agentic AI in Procurement: How Autonomous AI Has Been Transforming Supplier Deals - Pactum, <https://pactum.com/understanding-agentic-ai-in-procurement-how-autonomous-ai-has-been-transforming-supplier-deals/>

100. When Will Your AI Negotiate With My AI? - Nibble, <https://blog.nibbletechnology.com/will-ai-negotiate-with-ai>

101. Contract Negotiation AI Agents for the Finance Industry - Glide, <https://www.glideapps.com/agents/finance/contract-negotiation-ai-agents>

102. How To Use AI Negotiation To Get More Of What You Want | Lindy, <https://www.lindy.ai/blog/ai-negotiation>

103. AI in Contract Negotiations (procurement) : r/legaltech - Reddit, <https://www.reddit.com/r/legaltech/comments/1i3eqtg/ai_in_contract_negotiations_procurement/>

104. The leader in agentic AI for procurement for over half a decade, <https://pactum.com/>

105. The crucial role of humans in AI oversight - Cornerstone OnDemand, <https://www.cornerstoneondemand.com/resources/article/the-crucial-role-of-humans-in-ai-oversight/>

106. How humans & AI agents can work together ethically & effectively - Macro 4, <https://www.macro4.com/blog/the-rise-of-ai-agents-how-humans-and-machines-can-work-together-ethically-and-effectively/>

107. New Ethics Risks Courtesy of AI Agents? Researchers Are on the Case - IBM, <https://www.ibm.com/think/insights/ai-agent-ethics>

108. What Ethical Issues Does Agentforce AI Bring to the Table for CIOs? - Inclusion Cloud, <https://inclusioncloud.com/insights/blog/ethical-issues-agentforce-cios/>

109. AI agents evolve rapidly, challenging human oversight - IBM, <https://www.ibm.com/think/insights/ai-agents-evolve-rapidly>

110. Unlocking value with AI agents: A responsible approach - PwC, <https://www.pwc.com/us/en/tech-effect/ai-analytics/responsible-ai-agents.html>

111. Human approval for AI agent actions - Safe Docs, <https://docs.safe.global/home/ai-agent-quickstarts/human-approval>

112. From Fine Print to Machine Code: How AI Agents are Rewriting the Rules of Engagement: Part 3 of 3, <https://law.stanford.edu/2025/03/26/from-fine-print-to-machine-code-how-ai-agents-are-rewriting-the-rules-of-engagement-part-3-of-3/>

113. 5 Ways To Build a Trustworthy AI Agent - Salesforce, <https://www.salesforce.com/blog/trustworthy-ai-agent/>

114. How to use Azure AI Agent Service with function calling - Learn Microsoft, <https://learn.microsoft.com/en-us/azure/ai-services/agents/how-to/tools/function-calling>

115. Function-Calling vs Agents - Community.aws, <https://community.aws/content/2sryksE4Ga2hAsUksJZfnT8pJnr/function-calling-vs-agents>

116. ReAct agents vs function calling agents - LeewayHertz, <https://www.leewayhertz.com/react-agents-vs-function-calling-agents/>

117. Agent Communication and Message Passing: Streamlining Interaction and Data Exchange in Multi-Agent Systems - SmythOS, <https://smythos.com/ai-agents/agent-architectures/agent-communication-and-message-passing/>

118. AI-Exchange Protocol (AIXP): A Communication Standard for Artificial Intelligence Agents - GitHub, <https://github.com/davila7/AIXP>

119. Communicating with other agents – Fetch.ai Documentation, <https://fetch.ai/docs/guides/agents/intermediate/communicating-with-other-agents>

120. Designing AI Agents That Work for You, Part 1: Communication Patterns - Innovation at Consumer Reports, <https://innovation.consumerreports.org/designing-ai-agents-that-work-for-you-part-1/>

121. How to Automate Meeting Scheduling with AI - Datagrid, <https://www.datagrid.com/blog/automate-email-scheduling-ai>

122. Calendly AI Agents - Relevance AI, <https://relevanceai.com/agent-templates-software/calendly>

123. Emergency Meeting Coordination AI Agent | ClickUp™, <https://clickup.com/p/ai-agents/emergency-meeting-coordination>

124. www\.salesforce.com, <https://www.salesforce.com/service/ai/customer-service-agents/#:~:text=AI%20customer%20service%20agents%20are,a%20personalized%20and%20conversational%20way.>

125. AI Customer Service Agents - Salesforce, <https://www.salesforce.com/service/ai/customer-service-agents/>

126. AI Agent-Led Customer Service: Revolutionizing Support with Freddy AI - Freshworks, <https://www.freshworks.com/freshdesk/ai-agents/customer-service/>

127. sema4.ai, <https://sema4.ai/blog/ai-agents-supply-chain/#:~:text=AI%20agents%20monitor%20supplier%20performance,costs%20while%20ensuring%20adequate%20supply.>

128. AI Agents for Manufacturing Success | Salesforce US, <https://www.salesforce.com/manufacturing/artificial-intelligence/ai-agents-for-manufacturing/>

129. Revolutionizing Supply Chain Management: How AI Agents are Reshaping Industry Logistics - Sema4.ai, <https://sema4.ai/blog/ai-agents-supply-chain/>

130. Industrial AI in action: How AI agents and digital threads will transform the manufacturing industries - Microsoft, <https://www.microsoft.com/en-us/industry/blog/manufacturing-and-mobility/manufacturing/2025/03/25/industrial-ai-in-action-how-ai-agents-and-digital-threads-will-transform-the-manufacturing-industries/>

131. From Data to Decisions: AI Agents for Industrial Process Optimization - Akira AI, <https://www.akira.ai/blog/ai-agents-for-industrial-process-optimization>

132. Why should manufacturers embrace AI agents now? - The World Economic Forum, <https://www.weforum.org/stories/2025/01/why-manufacturers-should-embrace-next-frontier-ai-agents/>

133. AI Agents in Manufacturing 2025 Ultimate Guide - Rapid Innovation, <https://www.rapidinnovation.io/post/ai-agent-manufacturing-applications-use-cases-benefits>

134. AI Agents for Manufacturing Will Give You Superpowers | Plataine, <https://www.plataine.com/blog/ai-agents-for-manufacturing-will-give-you-superpowers/>

135. What are AI Agents in Manufacturing? - Augmentir, <https://www.augmentir.com/glossary/ai-agents-in-manufacturing>

136. AI agent for manufacturing: Applications and use cases, components, capabilities, implementation and benefits - LeewayHertz, <https://www.leewayhertz.com/ai-agent-for-manufacturing/>

137. Reinventing Manufacturing with Agentic AI - Akira AI, <https://www.akira.ai/blog/ai-agents-for-manufacturing>

138. AI Agents In Production – A High Level Overview - Hiflylabs, <https://hiflylabs.com/blog/2024/8/1/ai-agents-multi-agent-overview>

139. How AI Agents Are Driving ROI: 3 Real-World Case Studies (2025) - Creole Studios, <https://www.creolestudios.com/real-world-ai-agent-case-studies/>

140. The Future of AI: The Power of Agent-to-Agent - Workday Blog, <https://blog.workday.com/en-us/agent-to-agent-overview.html>

141. Future of AI Agents: Trends & Predictions for Businesses (2025) - REVE Chat, <https://www.revechat.com/blog/future-of-ai-agents/>

142. AI Agents: The Defining Workforce Trend of 2025 - Data Society, <https://datasociety.com/ai-agents-the-defining-workforce-trend-of-2025/>

143. Generative AI meets the virtual world: A model for human-AI collaboration - Deloitte, <https://www2.deloitte.com/us/en/insights/industry/technology/ai-and-vr-model-for-human-ai-collaboration.html>

144. Top 10 AI Agent Trends and Predictions for 2025 - Analytics Vidhya, <https://www.analyticsvidhya.com/blog/2024/12/ai-agent-trends/>

145. Why agents are the next frontier of generative AI - McKinsey, <https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/why-agents-are-the-next-frontier-of-generative-ai>

146. 16 Real-World AI Agents Examples in 2025 - Aisera, <https://aisera.com/blog/ai-agents-examples/>
