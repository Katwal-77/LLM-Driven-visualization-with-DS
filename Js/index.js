// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
// Check if window.chartInstances exists, create if not
if (!window.chartInstances) window.chartInstances = {};

// Tab functionality
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
 tab.addEventListener('click', () => {
     const tabId = tab.getAttribute('data-tab');
     
     // Remove active class from all tabs and tab contents
     tabs.forEach(t => t.classList.remove('active'));
     tabContents.forEach(content => content.classList.remove('active'));
     
     // Add active class to clicked tab and corresponding content
     tab.classList.add('active');
     document.getElementById(tabId).classList.add('active');
     
     // Scroll to top of the content area
     window.scrollTo({
         top: document.querySelector('.tabs-container').offsetHeight,
         behavior: 'smooth'
     });
     
     // Initialize or resize charts for the active tab
     initChartsForActiveTab(tabId);
 });
});

// Expandable sections functionality
const expandableSections = document.querySelectorAll('.expandable-section');

expandableSections.forEach(section => {
 const header = section.querySelector('.expandable-header');
 
 header.addEventListener('click', () => {
     section.classList.toggle('collapsed');
 });
});

// Initialize charts for the active tab on page load
const activeTabId = document.querySelector('.tab.active').getAttribute('data-tab');
initChartsForActiveTab(activeTabId);

// Function to initialize charts based on active tab
function initChartsForActiveTab(tabId) {
 switch(tabId) {
     case 'introduction':
         initIntroChart();
         break;
     case 'role':
         initRoleChart();
         break;
     case 'matrix':
         initMatrixFlowChart();
         break;
     case 'methods':
         initVisMethodsChart();
         break;
     case 'agriculture':
         initAgriculturePerformanceChart();
         break;
     case 'evaluation':
         initEvaluationFlowChart();
         break;
     case 'challenges':
         initChallengesChart();
         break;
     case 'future':
         initFutureDirectionsChart();
         break;
 }
}

// Resize charts when window is resized
window.addEventListener('resize', function() {
 const activeTabId = document.querySelector('.tab.active').getAttribute('data-tab');
 initChartsForActiveTab(activeTabId);
});

// Initialize Introduction Chart
function initIntroChart() {
 const ctx = document.getElementById('introChart');
 if (!ctx) return;
 
 // Destroy previous chart instance if exists
 if (window.chartInstances.introChart) {
     window.chartInstances.introChart.destroy();
 }
 
 window.chartInstances.introChart = new Chart(ctx, {
     type: 'bar',
     data: {
         labels: ['Predictive Analytics', 'Disease Modeling', 'Supply Chain', 'Precision Agriculture', 'Web Analytics'],
         datasets: [{
             label: 'LLM Application Impact',
             data: [85, 78, 92, 88, 75],
             backgroundColor: [
                 'rgba(58, 110, 165, 0.7)',
                 'rgba(0, 78, 152, 0.7)',
                 'rgba(255, 103, 0, 0.7)',
                 'rgba(76, 175, 80, 0.7)',
                 'rgba(33, 150, 243, 0.7)'
             ],
             borderColor: [
                 'rgba(58, 110, 165, 1)',
                 'rgba(0, 78, 152, 1)',
                 'rgba(255, 103, 0, 1)',
                 'rgba(76, 175, 80, 1)',
                 'rgba(33, 150, 243, 1)'
             ],
             borderWidth: 1
         }]
     },
     options: {
         responsive: true,
         maintainAspectRatio: false,
         plugins: {
             title: {
                 display: true,
                 text: 'Impact of LLM-Driven Visualization in Various Fields',
                 font: {
                     size: 16
                 }
             },
             legend: {
                 display: false
             }
         },
         scales: {
             y: {
                 beginAtZero: true,
                 max: 100,
                 title: {
                     display: true,
                     text: 'Impact Score (%)'
                 }
             },
             x: {
                 title: {
                     display: true,
                     text: 'Application Domain'
                 }
             }
         }
     }
 });
}

// Initialize Role Chart
function initRoleChart() {
 const ctx = document.getElementById('roleChart');
 if (!ctx) return;
 
 // Destroy previous chart instance if exists
 if (window.chartInstances.roleChart) {
     window.chartInstances.roleChart.destroy();
 }
 
 window.chartInstances.roleChart = new Chart(ctx, {
     type: 'radar',
     data: {
         labels: ['Data Exploration', 'Communication', 'Validation', 'Error Detection', 'Pattern Recognition'],
         datasets: [{
             label: 'Visualization Impact',
             data: [90, 85, 75, 80, 95],
             fill: true,
             backgroundColor: 'rgba(58, 110, 165, 0.2)',
             borderColor: 'rgba(58, 110, 165, 1)',
             pointBackgroundColor: 'rgba(58, 110, 165, 1)',
             pointBorderColor: '#fff',
             pointHoverBackgroundColor: '#fff',
             pointHoverBorderColor: 'rgba(58, 110, 165, 1)'
         }]
     },
     options: {
         responsive: true,
         maintainAspectRatio: false,
         plugins: {
             title: {
                 display: true,
                 text: 'How Visualization Enhances LLM Analytics',
                 font: {
                     size: 16
                 }
             }
         },
         scales: {
             r: {
                 angleLines: {
                     display: true
                 },
                 suggestedMin: 0,
                 suggestedMax: 100
             }
         }
     }
 });
}

// Initialize Matrix Flow Chart
function initMatrixFlowChart() {
 const ctx = document.getElementById('matrixFlowChart');
 if (!ctx) return;
 
 // Destroy previous chart instance if exists
 if (window.chartInstances.matrixFlowChart) {
     window.chartInstances.matrixFlowChart.destroy();
 }
 
 window.chartInstances.matrixFlowChart = new Chart(ctx, {
     type: 'bar',
     data: {
         labels: ['Input Embeddings', 'Matrix Formation', 'Linear Projection', 'Matrix Multiplication', 'Scaling & Softmax', 'Weighted Sum'],
         datasets: [{
             label: 'Process Complexity',
             data: [2, 3, 4, 5, 3, 4],
             backgroundColor: 'rgba(255, 103, 0, 0.7)',
             borderColor: 'rgba(255, 103, 0, 1)',
             borderWidth: 1
         }]
     },
     options: {
         indexAxis: 'y',
         responsive: true,
         maintainAspectRatio: false,
         plugins: {
             title: {
                 display: true,
                 text: 'Transformer Attention Mechanism Process Flow',
                 font: {
                     size: 16
                 }
             }
         },
         scales: {
             x: {
                 beginAtZero: true,
                 title: {
                     display: true,
                     text: 'Relative Complexity'
                 }
             },
             y: {
                 title: {
                     display: true,
                     text: 'Process Step'
                 }
             }
         }
     }
 });
}

// Initialize Visualization Methods Chart
function initVisMethodsChart() {
 const ctx = document.getElementById('visMethodsChart');
 if (!ctx) return;
 
 // Destroy previous chart instance if exists
 if (window.chartInstances.visMethodsChart) {
     window.chartInstances.visMethodsChart.destroy();
 }
 
 window.chartInstances.visMethodsChart = new Chart(ctx, {
     type: 'bar',
     data: {
         labels: ['With RAG', 'Without RAG'],
         datasets: [{
             label: 'Composite Performance Score',
             data: [9.65, 9.21],
             backgroundColor: [
                 'rgba(58, 110, 165, 0.7)',
                 'rgba(255, 103, 0, 0.7)'
             ],
             borderColor: [
                 'rgba(58, 110, 165, 1)',
                 'rgba(255, 103, 0, 1)'
             ],
             borderWidth: 1
         }]
     },
     options: {
         responsive: true,
         maintainAspectRatio: false,
         plugins: {
             title: {
                 display: true,
                 text: 'Impact of RAG Component on ShizishanGPT Performance',
                 font: {
                     size: 16
                 }
             }
         },
         scales: {
             y: {
                 beginAtZero: true,
                 max: 10,
                 title: {
                     display: true,
                     text: 'Performance Score'
                 }
             }
         }
     }
 });
}

// Initialize Agriculture Performance Chart
function initAgriculturePerformanceChart() {
 const ctx = document.getElementById('agriculturePerformanceChart');
 if (!ctx) return;
 
 // Destroy previous chart instance if exists
 if (window.chartInstances.agriculturePerformanceChart) {
     window.chartInstances.agriculturePerformanceChart.destroy();
 }
 
 window.chartInstances.agriculturePerformanceChart = new Chart(ctx, {
     type: 'radar',
     data: {
         labels: ['Accuracy', 'Professionalism', 'Language Fluency', 'Knowledge Integration', 'Visualization Quality'],
         datasets: [{
             label: 'ShizishanGPT',
             data: [9.8, 9.5, 9.6, 9.7, 9.5],
             fill: true,
             backgroundColor: 'rgba(76, 175, 80, 0.2)',
             borderColor: 'rgba(76, 175, 80, 1)',
             pointBackgroundColor: 'rgba(76, 175, 80, 1)',
             pointBorderColor: '#fff',
             pointHoverBackgroundColor: '#fff',
             pointHoverBorderColor: 'rgba(76, 175, 80, 1)'
         }, {
             label: 'General-Purpose LLM',
             data: [7.5, 8.2, 9.1, 6.8, 7.3],
             fill: true,
             backgroundColor: 'rgba(255, 103, 0, 0.2)',
             borderColor: 'rgba(255, 103, 0, 1)',
             pointBackgroundColor: 'rgba(255, 103, 0, 1)',
             pointBorderColor: '#fff',
             pointHoverBackgroundColor: '#fff',
             pointHoverBorderColor: 'rgba(255, 103, 0, 1)'
         }]
     },
     options: {
         responsive: true,
         maintainAspectRatio: false,
         plugins: {
             title: {
                 display: true,
                 text: 'Agricultural LLM Performance Comparison',
                 font: {
                     size: 16
                 }
             }
         },
         scales: {
             r: {
                 angleLines: {
                     display: true
                 },
                 suggestedMin: 0,
                 suggestedMax: 10
             }
         }
     }
 });
}

// Initialize Evaluation Flow Chart
function initEvaluationFlowChart() {
 const ctx = document.getElementById('evaluationFlowChart');
 if (!ctx) return;
 
 // Destroy previous chart instance if exists
 if (window.chartInstances.evaluationFlowChart) {
     window.chartInstances.evaluationFlowChart.destroy();
 }
 
 window.chartInstances.evaluationFlowChart = new Chart(ctx, {
     type: 'bar',
     data: {
         labels: ['Data Accuracy', 'Data Representation', 'Data Completeness', 'F1 Score', 'Code Quality', 'Final Evaluation'],
         datasets: [{
             label: 'Evaluation Process Importance',
             data: [10, 8, 8, 9, 7, 10],
             backgroundColor: 'rgba(33, 150, 243, 0.7)',
             borderColor: 'rgba(33, 150, 243, 1)',
             borderWidth: 1
         }]
     },
     options: {
         indexAxis: 'y',
         responsive: true,
         maintainAspectRatio: false,
         plugins: {
             title: {
                 display: true,
                 text: 'Visualization Evaluation Process Flow',
                 font: {
                     size: 16
                 }
             }
         },
         scales: {
             x: {
                 beginAtZero: true,
                 max: 10,
                 title: {
                     display: true,
                     text: 'Relative Importance'
                 }
             }
         }
     }
 });
}

// Initialize Challenges Chart
function initChallengesChart() {
 const ctx = document.getElementById('challengesChart');
 if (!ctx) return;
 
 // Destroy previous chart instance if exists
 if (window.chartInstances.challengesChart) {
     window.chartInstances.challengesChart.destroy();
 }
 
 window.chartInstances.challengesChart = new Chart(ctx, {
     type: 'doughnut',
     data: {
         labels: ['Data Quality Issues', 'Generalization Problems', 'Interpretability Challenges', 'Ethical Concerns', 'Bias in Visualization'],
         datasets: [{
             data: [25, 20, 20, 15, 20],
             backgroundColor: [
                 'rgba(255, 99, 132, 0.7)',
                 'rgba(54, 162, 235, 0.7)',
                 'rgba(255, 206, 86, 0.7)',
                 'rgba(75, 192, 192, 0.7)',
                 'rgba(153, 102, 255, 0.7)'
             ],
             borderColor: [
                 'rgba(255, 99, 132, 1)',
                 'rgba(54, 162, 235, 1)',
                 'rgba(255, 206, 86, 1)',
                 'rgba(75, 192, 192, 1)',
                 'rgba(153, 102, 255, 1)'
             ],
             borderWidth: 1
         }]
     },
     options: {
         responsive: true,
         maintainAspectRatio: false,
         plugins: {
             title: {
                 display: true,
                 text: 'Distribution of Challenges in AI Visualizations',
                 font: {
                     size: 16
                 }
             }
         }
     }
 });
}

// Initialize Future Directions Chart
function initFutureDirectionsChart() {
 const ctx = document.getElementById('futureDirectionsChart');
 if (!ctx) return;
 
 // Destroy previous chart instance if exists
 if (window.chartInstances.futureDirectionsChart) {
     window.chartInstances.futureDirectionsChart.destroy();
 }
 
 window.chartInstances.futureDirectionsChart = new Chart(ctx, {
     type: 'polarArea',
     data: {
         labels: ['Multi-Modal Integration', 'Automated Code Generation', 'Interactive Dashboards', 'Cross-Domain Applications', 'Democratization of AI Tools'],
         datasets: [{
             data: [8, 9, 7, 6, 10],
             backgroundColor: [
                 'rgba(58, 110, 165, 0.7)',
                 'rgba(76, 175, 80, 0.7)',
                 'rgba(255, 103, 0, 0.7)',
                 'rgba(33, 150, 243, 0.7)',
                 'rgba(156, 39, 176, 0.7)'
             ],
             borderWidth: 1
         }]
     },
     options: {
         responsive: true,
         maintainAspectRatio: false,
         plugins: {
             title: {
                 display: true,
                 text: 'Future Research Directions: Relative Importance',
                 font: {
                     size: 16
                 }
             }
         },
         scales: {
             r: {
                 max: 10,
                 min: 0,
                 ticks: {
                     stepSize: 2
                 }
             }
         }
     }
 });
}
});

// Staggered animation for list items
document.querySelectorAll('ul li, ol li').forEach((item, index) => {
item.style.animationDelay = `${index * 0.1}s`;
});

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
 if (entry.isIntersecting) {
     entry.target.style.opacity = '1';
     entry.target.style.transform = 'translateY(0)';
 }
});
}, {
threshold: 0.1
});

// Observe elements
document.querySelectorAll('.highlight, .card, .expandable-section').forEach(el => {
el.style.opacity = '0';
el.style.transform = 'translateY(20px)';
el.style.transition = 'all 0.6s ease';
observer.observe(el);
});

// Enhanced expandable sections
document.querySelectorAll('.expandable-header').forEach(header => {
header.addEventListener('click', () => {
 const section = header.parentElement;
 const content = section.querySelector('.expandable-content');
 const indicator = header.querySelector('.expandable-indicator');
 
 section.classList.toggle('collapsed');
 
 if (!section.classList.contains('collapsed')) {
     content.style.maxHeight = content.scrollHeight + 'px';
     indicator.style.transform = 'rotate(180deg)';
 } else {
     content.style.maxHeight = '0';
     indicator.style.transform = 'rotate(0deg)';
 }
});
});

// Add ripple effect to buttons
document.querySelectorAll('.tab').forEach(button => {
button.addEventListener('click', function(e) {
 const ripple = document.createElement('span');
 ripple.classList.add('ripple');
 this.appendChild(ripple);
 
 const rect = this.getBoundingClientRect();
 const size = Math.max(rect.width, rect.height);
 
 ripple.style.width = ripple.style.height = `${size}px`;
 ripple.style.left = `${e.clientX - rect.left - size/2}px`;
 ripple.style.top = `${e.clientY - rect.top - size/2}px`;
 
 ripple.addEventListener('animationend', () => ripple.remove());
});
});

window.parent.postMessage({ action: "ready" }, "*"); 

window.console = new Proxy(console, {
get(target, prop) {
if (['log', 'warn', 'error'].includes(prop)) {
return new Proxy(target[prop], {
apply(fn, thisArg, args) {
  fn.apply(thisArg, args);
  window.parent.postMessage({ action: 'console', 
    type: prop, 
    args: args.map((arg) => {
      try {
        return JSON.stringify(arg).replace(/^["']|["']$/g, '');
      } catch (e) {
        return arg;
      }
    }) 
  }, '*');
}
});
}
return target[prop];
}
});
