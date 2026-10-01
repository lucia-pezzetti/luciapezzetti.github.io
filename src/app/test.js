import Image from "next/image";

<section className="flex flex-row items-start text-left mb-12">
<div className="w-1/4 flex flex-col items-center">
  <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
    <Image src="/ProfessionalPhoto.JPG" alt="Lucia Pezzetti" width={96} height={96} className="w-full h-full object-cover" />
    </div>
  <h2 className="text-xl font-semibold" style={{ color: '#3a2d28' }}>Lucia Pezzetti</h2>
  <p className="text-gray-600">PhD Student @ ETH AI Center</p>
  <div className="flex space-x-4 mt-4">
    <a href="https://www.linkedin.com/in/lucia-pezzetti-6aaa55157/" target="_blank" rel="noreferrer" style={{ color: '#3a2d28' }}>
    <i className="fab fa-linkedin fa-2x icon"></i>
    </a>
    <a href="https://scholar.google.com/scholar?q=Lucia+Pezzetti" target="_blank" rel="noreferrer" style={{ color: '#3a2d28' }}>
      <i className="fas fa-graduation-cap fa-2x icon"></i>
    </a>
    <a href="https://github.com/lucia-pezzetti" target="_blank" rel="noreferrer" style={{ color: '#3a2d28' }}>
      <i className="fab fa-github fa-2x icon"></i>
    </a>
    <a href="mailto:lucia.pezzetti@ai.ethz.ch" style={{ color: '#3a2d28' }}>
      <i className="fas fa-envelope fa-2x icon"></i>
    </a>
  </div>
</div>
<div className="w-3/4 pl-8">
  <p className="text-lg text-gray-700">
    I am a PhD researcher specializing in mean field games, reinforcement learning, and optimization. My work focuses on applying machine learning techniques to solve real-world problems in traffic dynamics and green energy adoption. At the ETH AI Center, I am committed to advancing the field of artificial intelligence and exploring its applications in sustainable and efficient systems.
  </p>
</div>
</section>
