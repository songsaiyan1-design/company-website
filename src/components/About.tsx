import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="p-6 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4">关于我们</h2>
      <p className="mb-4">我们是一家致力于提供高质量服务和产品的公司。我们的使命是为客户创造价值，不断追求卓越。</p>
      <h3 className="font-semibold text-lg mb-2">我们的特性：</h3>
      <ul className="list-disc list-inside mb-4">
        <li>高品质的产品</li>
        <li>专业的团队</li>
        <li>卓越的客户服务</li>
        <li>创新的解决方案</li>
      </ul>
      <h3 className="font-semibold text-lg mb-2">公司统计：</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-gray-100 rounded shadow">
          <h4 className="font-bold">成立年份:</h4>
          <p>2010</p>
        </div>
        <div className="p-4 bg-gray-100 rounded shadow">
          <h4 className="font-bold">员工人数:</h4>
          <p>200+</p>
        </div>
        <div className="p-4 bg-gray-100 rounded shadow">
          <h4 className="font-bold">服务的国家:</h4>
          <p>15</p>
        </div>
        <div className="p-4 bg-gray-100 rounded shadow">
          <h4 className="font-bold">客户满意度:</h4>
          <p>98%</p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;