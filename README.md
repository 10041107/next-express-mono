<p align="center">
  <img src="https://images.weserv.nl/?url=https://images.pexels.com/photos/4488655/pexels-photo-4488655.jpeg&w=1200&h=300&fit=cover&a=center" width="100%" alt="banner">
</p>

<p align="center">
  <img src="https://img.shields.io/github/last-commit/10041107/next-express-mono?style=flat-square" />
  <img src="https://img.shields.io/github/stars/10041107/next-express-mono?style=flat-square" />
  <img src="https://img.shields.io/github/forks/10041107/next-express-mono?style=flat-square" />
</p>

<p align="center">
  <b>🚀 Ultimate Fullstack Monorepo Template</b><br>  
  <i>A high-performance fullstack monorepo starter kit featuring Next.js 14 (React 18) and Express.</i>
</p>

---

## **✨ Key Features**

- **Monorepo Architecture**: Efficient package management using Yarn Berry (v4) and Workspaces.  
- **Modern Frontend**: Optimized environment powered by React 18 and Next.js 14 App Router.  
- **Secure Backend**: Robust Express server with Helmet and CORS settings.  
- **Styling**: Pre-configured Tailwind CSS for instant UI development.  
- **Performance**: Architected to prevent unnecessary rerendering and enhance speed.  

---

## **🏗 Project Architecture**

**root/**  
├── **client/** (Next.js Frontend | Port: 3000)  
│   ├── app/ (App Router logic)  
│   ├── tailwind.config.js (Styling settings)  
│   └── package.json  
├── **server/** (Express Backend | Port: 3001)    
│   ├── index.js (Server entry point)   
│   └── package.json   
├── **package.json** (Root configuration)   
└── **yarn.lock**   

---

## **🛠 Technical Stack**

**Frontend**: React 18, Next.js 14 (App Router)  
**Backend**: Node.js, Express  
**Styling**: Tailwind CSS, PostCSS  
**Security**: Helmet, CORS  
**Package Manager**: Yarn 4.9.2 (Berry)  

---

## **🚀 Getting Started**

### **1. Prerequisites**

This project uses Yarn Modern (Berry). You must enable **Corepack**.

> **Command: corepack enable**
> 

### **2. Installation**

Install all dependencies across the workspace from the root directory.

> **Command: yarn install**
> 

### **3. Development**

Launch both frontend and backend development environments simultaneously.

> **Command: yarn dev**
> 

---

## **⚙️ Project Settings**

### **Frontend (client)**

- **Framework**: Next.js 14 (React 18)  
- **Styling**: Tailwind CSS  
- **Port**: 3000  
- **Primary settings**: Includes SEO and Metadata settings in client/app/layout.js.  

### **Backend (server)**

- **Framework**: Express  
- **Security**:  
    - **helmet()** middleware for HTTP   header security.  
    - **cors** settings to control access from specific origins (http://localhost:3000).  
- **Port**: 3001  

---

## **📦 Scripts**

**yarn dev**: Run development mode for the entire workspace (Client & Server).  
**yarn workspace client dev**: Run the frontend separately.  
**yarn workspace server dev**: Run the backend separately.  
**yarn install**: Install dependencies and update the lockfile.  

---

## **🔒 Security & Optimization**

- **Backend Security**: Protects the server against XSS and common vulnerabilities using Helmet.  
- **CORS settings**: Allows resource access with credentials only for authorized origins.  
- **Frontend Optimization**: Leverages React 18's rendering engine and delivers minimized CSS bundles via Tailwind CSS.  


---

## ☕ Support & Donation  
 
If this project helped you, please consider buying me a coffee!  

<p align="left">
  <a href="https://buymeacoffee.com/10041107" target="_blank">
    <img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" alt="Buy Me a Coffee">
  </a>
</p>

---

### ⚖️ License

**Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)**


---
<p align="right">Maintained with ❤️ by <a href="https://github.com/10041107">10041107</a></p>  

  
---

<p align="center">
  <img src="https://images.weserv.nl/?url=https://images.pexels.com/photos/4488655/pexels-photo-4488655.jpeg&w=1200&h=300&fit=cover&a=center" width="100%" alt="next-express-mono banner">
</p>

<p align="center">
  <img src="https://img.shields.io/github/last-commit/10041107/next-express-mono?style=flat-square" />  
  <img src="https://img.shields.io/github/stars/10041107/next-express-mono?style=flat-square" />  
  <img src="https://img.shields.io/github/forks/10041107/next-express-mono?style=flat-square" />
</p>

<p align="center">
  <b>🚀 Ultimate Fullstack Monorepo Template</b><br>  
  <i>Next.js 14(React 18) 프론트엔드와 Express 백엔드가 완벽하게 통합된 고성능 모노레포 스타터 킷입니다.</i>  
</p>

---

## **✨ Key Features**

- **Monorepo Architecture**: Yarn Berry(v4) 및 Workspaces를 활용한 효율적인 패키지 관리  
- **Modern Frontend**: React 18과 Next.js 14 App Router 기반의 최적화된 프론트엔드 환경  
- **Secure Backend**: Helmet과 CORS 설정이 적용된 견고한 Express 서버  
- **Styling**: Tailwind CSS가 사전 설정되어 즉시 UI 개발 가능  
- **Performance**: 불필요한 Rerendering 방지를 고려한 구조적 설계  

---

## **🏗 Project Architecture**

**root/**  
├── **client/** (Next.js Frontend | Port: 3000)  
│   ├── app/ (App Router logic)  
│   ├── tailwind.config.js (Styling settings)  
│   └── package.json  
├── **server/** (Express Backend | Port: 3001)  
│   ├── index.js (Server entry point)  
│   └── package.json  
├── **package.json** (Root configuration)  
└── **yarn.lock**  

---

## **🛠 Technical Stack**  

**Frontend**: React 18, Next.js 14 (App Router)  
**Backend**: Node.js, Express  
**Styling**: Tailwind CSS, PostCSS  
**Security**: Helmet, CORS  
**Package Manager**: Yarn 4.9.2 (Berry)  

---

## **🚀 Getting Started**  

### **1. Prerequisites**  

이 프로젝트는 Yarn Modern(Berry)을 사용합니다.   
**Corepack**을 활성화해야 합니다.  

> **명령어: corepack enable**  
> 

### **2. Installation**  

루트 디렉토리에서 모든 의존성을 한 번에 설치합니다.  

> **명령어: yarn install**  
> 

### **3. Development**  

프론트엔드와 백엔드를 동시에 실행하여 개발 환경을 구동합니다.  

> **명령어: yarn dev**  
> 

---

## **⚙️ Project Settings**  

### **Frontend (client)**  

- **Framework**: Next.js 14 (React 18)  
- **Styling**: Tailwind CSS  
- **Port**: 3000  
- **Primary settings**: client/app/layout.js 내 SEO 및 Metadata settings 포함  

### **Backend (server)**  

- **Framework**: Express  
- **Security**:  
    - **helmet()** 미들웨어를 통한 HTTP 헤더 보안 적용  
    - **cors** 설정을 통한 특정 Origin(http://localhost:3000) 접근 제어  
- **Port**: 3001  

---

## **📦 Scripts**  

**yarn dev**: 전체 워크스페이스(Client & Server) 개발 모드 실행  
**yarn workspace client dev**: 프론트엔드 단독 실행  
**yarn workspace server dev**: 백엔드 단독 실행  
**yarn install**: 의존성 설치 및 lockfile 업데이트  

---

## **🔒 Security & Optimization**  

- **Backend Security**: helmet 미들웨어를 사용하여 XSS 및 보안 취약점으로부터 서버를 보호합니다.  
- **CORS settings**: 허용된 Origin에 대해서만 Credentials를 포함한 리소스 접근을 허용합니다.  
- **Frontend Optimization**: React 18의 최신 렌더링 엔진을 활용하며, Tailwind CSS를 통해 최적화된 CSS 번들을 제공합니다.  


---

## ☕ Support & Donation  

이 프로젝트가 마음에 드셨다면 별(⭐)을 눌러주시고, 개발자에게 따뜻한 커피 한 잔을 선물해 주세요!    

<p align="left">
  <a href="https://buymeacoffee.com/10041107" target="_blank">
    <img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" alt="Buy Me a Coffee">
  </a>
</p>

---

### ⚖️ License

**Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)**

* **Non-Commercial**: 비상업적 용도로만 사용 가능합니다.
* **Attribution**: 2차 가공 및 재배포 시 반드시 원작자(**@10041107**)의 출처를 밝혀야 합니다.
* **Modification**: 비상업적 목적의 자유로운 수정을 허용합니다.

---
<p align="right">Maintained with ❤️ by <a href="https://github.com/10041107">10041107</a></p>
