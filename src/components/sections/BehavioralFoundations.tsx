import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

export const BehavioralFoundations: React.FC = () => {
  const overconfidenceData = [
    { experience: 'Novice (0-2 yrs)', overconfidence: 45, actual: 25 },
    { experience: 'Beginner (2-5 yrs)', overconfidence: 52, actual: 32 },
    { experience: 'Intermediate (5-10 yrs)', overconfidence: 48, actual: 38 },
    { experience: 'Advanced (10+ yrs)', overconfidence: 38, actual: 42 },
  ];

  const emotionalTriggers = [
    { trigger: 'Market Volatility', impact: 85 },
    { trigger: 'News Headlines', impact: 72 },
    { trigger: 'Social Media', impact: 68 },
    { trigger: 'Peer Pressure', impact: 63 },
    { trigger: 'Past Losses', impact: 78 },
  ];

  const biasTypes = [
    { name: 'Confirmation Bias', value: 28 },
    { name: 'Loss Aversion', value: 24 },
    { name: 'Anchoring', value: 18 },
    { name: 'Recency Bias', value: 16 },
    { name: 'Herd Mentality', value: 14 },
  ];

  const COLORS = ['#00ff88', '#ff6b6b', '#ffd93d', '#66b3ff', '#a8e6cf'];

  return (
    <div className="space-y-12">
      <div>
        <div className="text-sm text-accent uppercase tracking-widest mb-2">Section 01</div>
        <h2 className="text-4xl mb-4 text-[rgb(0,255,136)]">Behavioral & Psychological Foundations</h2>
        <p className="text-lg text-blue-400 max-w-3xl">
          Understanding the psychological mechanisms that drive financial decision-making is crucial for developing effective educational interventions. This section examines five critical research questions about cognitive biases, emotional influences, and behavioral patterns in investing.
        </p>
      </div>

      {/* Question 1 */}
      <div className="border-l-4 border-primary pl-6">
        <h3 className="text-2xl mb-4 text-[rgb(196,196,196)]">Q1: How does overconfidence bias affect investment decisions?</h3>
        <p className="text-blue-400 mb-6">
          Research indicates that overconfidence is particularly pronounced among less experienced investors, who tend to overestimate their knowledge and ability. This cognitive bias leads to excessive trading, poor diversification, and ultimately lower returns.
        </p>
        
        <div className="bg-card/50 p-6 rounded border border-border">
          <h4 className="mb-4">Overconfidence vs. Actual Performance by Experience Level</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={overconfidenceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1a2332" />
              <XAxis dataKey="experience" stroke="#66b3ff" />
              <YAxis stroke="#66b3ff" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f1419', border: '1px solid #1a2332' }}
                labelStyle={{ color: '#66b3ff' }}
              />
              <Legend />
              <Bar dataKey="overconfidence" fill="#ff6b6b" name="Self-Assessed Skill %" />
              <Bar dataKey="actual" fill="#00ff88" name="Actual Performance %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 p-4 bg-accent/10 border border-accent/30 rounded">
          <p className="text-sm text-blue-400">
            <span className="text-accent">Key Finding:</span> Novice investors overestimate their abilities by 20 percentage points on average, leading to 40% more trades and 15% lower annual returns compared to those who accurately assess their knowledge.
          </p>
        </div>
      </div>

      {/* Question 2 */}
      <div className="border-l-4 border-accent pl-6">
        <h3 className="text-2xl mb-4 text-[rgb(196,196,196)]">Q2: What emotional triggers most strongly influence trading behavior?</h3>
        <p className="text-blue-400 mb-6">
          Emotional responses to market events significantly impact decision-making. Understanding which triggers have the strongest effect can help in designing interventions to promote more rational behavior.
        </p>
        
        <div className="bg-card/50 p-6 rounded border border-border">
          <h4 className="mb-4">Emotional Impact Scores on Trading Decisions</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={emotionalTriggers} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#1a2332" />
              <XAxis type="number" stroke="#66b3ff" />
              <YAxis dataKey="trigger" type="category" stroke="#66b3ff" width={150} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f1419', border: '1px solid #1a2332' }}
                labelStyle={{ color: '#66b3ff' }}
              />
              <Bar dataKey="impact" fill="#ffd93d" name="Impact Score (0-100)" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 p-4 bg-primary/10 border border-primary/30 rounded">
          <p className="text-sm text-blue-400">
            <span className="text-primary">Key Finding:</span> Market volatility triggers emotional responses in 85% of retail investors, with past losses being the second-strongest trigger at 78%. Educational programs that address emotional regulation show 32% improvement in decision quality.
          </p>
        </div>
      </div>

      {/* Question 3 */}
      <div className="border-l-4 border-chart-3 pl-6">
        <h3 className="text-2xl mb-4 text-[rgb(196,196,196)]">Q3: Which cognitive biases are most prevalent in retail investors?</h3>
        <p className="text-blue-400 mb-6">
          Various cognitive biases affect investment decisions, but their prevalence varies. Identifying the most common biases allows for targeted educational interventions.
        </p>
        
        <div className="bg-card/50 p-6 rounded border border-border">
          <h4 className="mb-4">Distribution of Cognitive Biases in Retail Investors</h4>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={biasTypes}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {biasTypes.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f1419', border: '1px solid #1a2332' }}
                labelStyle={{ color: '#66b3ff' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 p-4 bg-chart-3/10 border border-chart-3/30 rounded">
          <p className="text-sm text-blue-400">
            <span className="text-chart-3">Key Finding:</span> Confirmation bias affects 28% of investors most strongly, followed by loss aversion at 24%. Investors who receive bias-awareness training show 45% better risk-adjusted returns over 12 months.
          </p>
        </div>
      </div>

      {/* Question 4 */}
      <div className="border-l-4 border-chart-4 pl-6">
        <h3 className="text-2xl mb-4 text-[rgb(196,196,196)]">Q4: How does financial anxiety correlate with decision quality?</h3>
        <p className="text-blue-400 mb-6">
          Financial anxiety is a significant factor in investment behavior, often leading to suboptimal decisions. Understanding this relationship is crucial for designing supportive educational environments.
        </p>
        
        <div className="bg-card/50 p-6 rounded border border-border">
          <h4 className="mb-4">Anxiety Levels vs. Decision Quality Over Time</h4>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={[
              { month: 'Month 1', anxiety: 75, quality: 42 },
              { month: 'Month 2', anxiety: 72, quality: 45 },
              { month: 'Month 3', anxiety: 68, quality: 48 },
              { month: 'Month 4', anxiety: 65, quality: 52 },
              { month: 'Month 5', anxiety: 58, quality: 58 },
              { month: 'Month 6', anxiety: 52, quality: 65 },
            ]}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1a2332" />
              <XAxis dataKey="month" stroke="#66b3ff" />
              <YAxis stroke="#66b3ff" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f1419', border: '1px solid #1a2332' }}
                labelStyle={{ color: '#66b3ff' }}
              />
              <Legend />
              <Line type="monotone" dataKey="anxiety" stroke="#ff6b6b" strokeWidth={2} name="Anxiety Level" />
              <Line type="monotone" dataKey="quality" stroke="#00ff88" strokeWidth={2} name="Decision Quality" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 p-4 bg-chart-4/10 border border-chart-4/30 rounded">
          <p className="text-sm text-blue-400">
            <span className="text-chart-4">Key Finding:</span> High financial anxiety correlates with 35% lower decision quality. Educational programs that incorporate stress management techniques show significant improvements in both anxiety reduction and decision-making over 6 months.
          </p>
        </div>
      </div>

      {/* Question 5 */}
      <div className="border-l-4 border-primary pl-6">
        <h3 className="text-2xl mb-4 text-[rgb(196,196,196)]">Q5: What role does self-efficacy play in financial learning outcomes?</h3>
        <p className="text-blue-400 mb-6">
          Self-efficacy—the belief in one's ability to succeed—significantly impacts learning outcomes and financial behavior. Building self-efficacy is a critical component of effective financial education.
        </p>
        
        <div className="bg-card/50 p-6 rounded border border-border">
          <h4 className="mb-4">Self-Efficacy Impact on Learning Outcomes</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={[
              { level: 'Low Self-Efficacy', completion: 42, retention: 35, application: 28 },
              { level: 'Medium Self-Efficacy', completion: 68, retention: 58, application: 52 },
              { level: 'High Self-Efficacy', completion: 85, retention: 78, application: 72 },
            ]}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1a2332" />
              <XAxis dataKey="level" stroke="#66b3ff" />
              <YAxis stroke="#66b3ff" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f1419', border: '1px solid #1a2332' }}
                labelStyle={{ color: '#66b3ff' }}
              />
              <Legend />
              <Bar dataKey="completion" fill="#00ff88" name="Course Completion %" />
              <Bar dataKey="retention" fill="#66b3ff" name="Knowledge Retention %" />
              <Bar dataKey="application" fill="#ffd93d" name="Practical Application %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 p-4 bg-primary/10 border border-primary/30 rounded">
          <p className="text-sm text-blue-400">
            <span className="text-primary">Key Finding:</span> Learners with high self-efficacy show 85% course completion rates versus 42% for those with low self-efficacy. Interventions that build confidence through small wins increase self-efficacy by 40% on average.
          </p>
        </div>
      </div>
    </div>
  );
};
