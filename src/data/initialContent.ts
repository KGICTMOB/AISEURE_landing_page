export interface GlobalSettings {
    primaryColor: string;
    secondaryColor: string;
    buttonShape: 'rounded' | 'pill' | 'square';
}

export interface ImageAssets {
    [key: string]: string;
}

export interface ContentSection {
    [key: string]: string;
}

export interface ContentData {
    global: GlobalSettings;
    images: ImageAssets;
    sections: {
        [key: string]: ContentSection;
    };
}

export const initialContent: ContentData = {
    global: {
        primaryColor: '#2563eb', // blue-600
        secondaryColor: '#4f46e5', // indigo-600
        buttonShape: 'rounded'
    },
    images: {
        logo: '/logo.png',
        heroBackground: '/hero-bg.jpg'
    },
    sections: {
        home: {
            heroTitle: "AI Security\nFull-Stack Master Plan",
            heroSubtitle: "AI 기반의 보안 솔루션으로 귀사의 미래를 보호하십시오.\nISO 27001, ISMS-P 및 IT Audit 컨설팅.",
            heroButtonText: "기업 소개",
            solutionsTitle: "Our Solutions",
            solutionsSubtitle: "Comprehensive AI-driven security strategies to safeguard your digital assets.",

            solution1Title: "AI Threat Detection",
            solution1Desc: "AI 핵심 6개의 기능을 제공하며 (적응형 학습, 패턴 인식, 데이터 분석, 자동화된 대응, 예측 분석, 오탐률 감소)",
            solution2Title: "Security Architecture",
            solution2Desc: "기업 환경에 최적화된 견고하고 확장 가능한 보안 인프라 설계.",
            solution3Title: "Full-Stack Implementation",
            solution3Desc: "프론트엔드 인터페이스부터 백엔드 데이터베이스까지 엔드투엔드 보안 통합.",

            consultingTitle: "Expert Consulting",
            consultingSubtitle: "Strategic guidance to navigate the complex landscape of security compliance.",

            consulting1Title: "ISO 27001 Certification",
            consulting1Desc: "ISO 27001 정보보안 표준 달성 및 유지를 위한 전문가 가이드.",
            consulting1Features: "Gap Analysis (갭 분석)|Policy Development (정책 수립)|Internal Audit Support (내부 감사 지원)",
            consulting2Title: "ISMS / ISMS-P",
            consulting2Desc: "컴플라이언스 준수를 위한 포괄적인 정보보호 관리체계 컨설팅.",
            consulting2Features: "Risk Assessment (위험 평가)|Control Implementation (통제 구현)|Certification Readiness (인증 준비)",
            consulting3Title: "IT Internal Audit",
            consulting3Desc: "IT 인프라 및 프로세스에 대한 철저한 평가를 통해 취약점 식별 및 개선.",
            consulting3Features: "Vulnerability Assessment (취약점 진단)|Process Optimization (프로세스 최적화)|Compliance Check (규정 준수 확인)"
        },
        aiThreatHero: {
            title: "현대 위협 탐지에 AI는 가장 중요한 솔루션",
            description1: "AI 시스템은 이제 사이버 보안 의사 결정의 초석입니다. 이러한 시스템은 광범위한 위협에 능숙하게 대응하고 매우 정확한 사고 대응 전략을 자동화합니다. 이러한 발전은 빠르게 진화하는 사이버 위협의 본질과 방대한 양의 위협 인텔리전스 입력을 관리해야 하는 과제에 대응하는 데 매우 중요합니다.",
            description2: "AI 기반 위협 탐지는 IoT 기기, 클라우드 환경, 모바일 기기 등 공격 벡터의 확장과 같이 탐지 및 완화가 어려운 진화하는 위협 전술을 방지하도록 설계되었고, 랜섬웨어를 비롯한 사이버 공격의 규모와 속도가 증가하는 상황에 대응하는 것이 목표입니다.",
            buttonText: "주요 기능 살펴보기"
        },
        adaptiveLearning: {
            title: "적응형 학습",
            description: "AI 시스템의 머신 러닝 모델을 사용하여 진화하는 위협에 대응하기 위한 위협 탐지 기능을 지속적으로 개선합니다.",
            overviewTitle: "개요",
            overviewText1: "적응형 학습은 AI 기반 위협 탐지 시스템의 핵심 요소로, 시스템이 새로운 위협 패턴을 지속적으로 학습하고 적응할 수 있도록 합니다. 이 기술은 머신 러닝 알고리즘을 활용하여 과거 데이터와 실시간 위협 정보를 분석함으로써 탐지 정확도를 지속적으로 향상시킵니다.",
            overviewText2: "전통적인 시그니처 기반 탐지 방식과 달리, 적응형 학습 시스템은 알려지지 않은 위협(Zero-day attacks)도 효과적으로 탐지할 수 있으며, 공격자의 전술이 변화함에 따라 자동으로 방어 메커니즘을 업데이트합니다.",

            benefitsTitle: "주요 이점",
            benefit1Title: "높은 탐지 정확도",
            benefit1Desc: "지속적인 학습을 통해 오탐(False Positive)과 미탐(False Negative)을 최소화하여 위협 탐지의 정확도를 극대화합니다.",
            benefit2Title: "실시간 적응",
            benefit2Desc: "새로운 위협 패턴이 발견되면 즉시 학습하여 모델을 업데이트하므로 최신 공격 기법에도 신속하게 대응할 수 있습니다.",
            benefit3Title: "Zero-day 공격 방어",
            benefit3Desc: "알려지지 않은 새로운 공격 유형도 행동 패턴 분석을 통해 탐지하여 조직을 최신 위협으로부터 보호합니다.",
            benefit4Title: "지속적인 개선",
            benefit4Desc: "시간이 지남에 따라 시스템 성능이 자동으로 향상되어 장기적으로 더욱 강력한 보안 태세를 유지할 수 있습니다.",

            howItWorksTitle: "작동 원리",
            howItWorks1Title: "데이터 수집 및 전처리",
            howItWorks1Desc: "네트워크 트래픽, 시스템 로그, 사용자 행동 등 다양한 소스에서 데이터를 수집하고 분석 가능한 형태로 정제합니다.",
            howItWorks2Title: "특징 추출 및 학습",
            howItWorks2Desc: "머신 러닝 알고리즘이 데이터에서 중요한 특징을 추출하고, 정상 행동과 비정상 행동의 패턴을 학습합니다.",
            howItWorks3Title: "실시간 탐지 및 분류",
            howItWorks3Desc: "학습된 모델을 사용하여 실시간으로 들어오는 데이터를 분석하고 위협 여부를 판단합니다.",
            howItWorks4Title: "피드백 및 모델 업데이트",
            howItWorks4Desc: "탐지 결과와 보안 분석가의 피드백을 바탕으로 모델을 지속적으로 재학습하여 성능을 개선합니다."
        },
        patternRecognition: {
            title: "고급 패턴 인식",
            description: "인간 분석가가 감지할 수 없는 미묘한 악성 활동 징후를 포함하여 방대한 양의 데이터에서 공격자의 패턴과 이상을 식별합니다.",
            overviewTitle: "개요",
            overviewText1: "고급 패턴 인식은 AI가 복잡한 데이터 세트에서 숨겨진 패턴과 이상 징후를 발견할 수 있게 하는 핵심 기술입니다. 딥러닝과 고급 통계 분석을 활용하여 인간 분석가가 놓칠 수 있는 미세한 공격 신호를 탐지합니다.",
            overviewText2: "이 기술은 APT(Advanced Persistent Threat) 공격과 같이 장기간에 걸쳐 은밀하게 진행되는 정교한 공격을 탐지하는 데 특히 효과적입니다.",

            benefitsTitle: "주요 이점",
            benefit1Title: "미세한 이상 징후 탐지",
            benefit1Desc: "정상 행동에서 벗어난 미세한 변화도 감지하여 초기 단계의 공격을 차단합니다.",
            benefit2Title: "연관 관계 분석",
            benefit2Desc: "서로 다른 이벤트 간의 숨겨진 연관성을 발견하여 복합 공격을 식별합니다.",
            benefit3Title: "APT 탐지",
            benefit3Desc: "장기간에 걸친 은밀한 공격 패턴을 식별하여 고급 지속 위협을 방어합니다.",
            benefit4Title: "행동 기반 분석",
            benefit4Desc: "시그니처가 아닌 행동 패턴을 분석하여 새로운 유형의 공격도 탐지합니다.",

            howItWorksTitle: "작동 원리",
            howItWorks1Title: "다차원 데이터 수집",
            howItWorks1Desc: "네트워크, 엔드포인트, 애플리케이션 등 다양한 소스에서 데이터를 수집합니다.",
            howItWorks2Title: "정상 행동 프로파일링",
            howItWorks2Desc: "AI가 정상적인 사용자 및 시스템 행동의 베이스라인을 학습합니다.",
            howItWorks3Title: "이상 징후 탐지",
            howItWorks3Desc: "베이스라인에서 벗어난 행동을 실시간으로 식별하고 위험도를 평가합니다.",
            howItWorks4Title: "패턴 상관 분석",
            howItWorks4Desc: "개별 이벤트를 연결하여 공격 캠페인의 전체 그림을 파악합니다."
        },
        dataAnalysis: {
            title: "대규모 데이터 분석",
            description: "AI 알고리즘은 인간 분석가가 불가능한 규모와 속도로 위협을 탐지하기 위해 방대한 양의 데이터를 처리하고 분석합니다.",
            overviewTitle: "개요",
            overviewText1: "현대 기업 환경에서는 매일 테라바이트 단위의 보안 데이터가 생성됩니다. 대규모 데이터 분석 기술은 AI를 활용하여 이러한 방대한 데이터를 실시간으로 처리하고 분석함으로써 위협을 신속하게 탐지합니다.",
            overviewText2: "빅데이터 처리 기술과 분산 컴퓨팅을 결합하여 페타바이트 규모의 데이터에서도 밀리초 단위로 위협을 식별할 수 있습니다.",

            benefitsTitle: "주요 이점",
            benefit1Title: "실시간 처리",
            benefit1Desc: "스트리밍 데이터를 실시간으로 분석하여 위협을 즉시 탐지하고 대응합니다.",
            benefit2Title: "확장성",
            benefit2Desc: "데이터 양이 증가해도 성능 저하 없이 분석 능력을 확장할 수 있습니다.",
            benefit3Title: "포괄적 가시성",
            benefit3Desc: "전체 IT 인프라에 대한 통합된 보안 가시성을 제공합니다.",
            benefit4Title: "인사이트 도출",
            benefit4Desc: "데이터에서 의미 있는 보안 인사이트와 트렌드를 자동으로 추출합니다.",

            howItWorksTitle: "작동 원리",
            howItWorks1Title: "데이터 수집 및 통합",
            howItWorks1Desc: "다양한 소스(SIEM, 방화벽, IDS/IPS, 엔드포인트 등)에서 데이터를 수집하고 통합합니다.",
            howItWorks2Title: "데이터 정규화",
            howItWorks2Desc: "서로 다른 형식의 데이터를 표준화된 형태로 변환하여 분석 가능하게 만듭니다.",
            howItWorks3Title: "병렬 처리",
            howItWorks3Desc: "분산 컴퓨팅 기술을 활용하여 대규모 데이터를 병렬로 처리합니다.",
            howItWorks4Title: "AI 기반 분석",
            howItWorks4Desc: "머신러닝 모델을 적용하여 위협 패턴을 식별하고 이상 징후를 탐지합니다."
        },
        automatedResponse: {
            title: "자동화된 대응",
            description: "자동화된 대응으로 위협을 신속하게 완화합니다.",
            overviewTitle: "개요",
            overviewText1: "자동화된 대응 시스템은 위협이 탐지되는 즉시 사전 정의된 플레이북에 따라 자동으로 대응 조치를 실행합니다. 이를 통해 위협 대응 시간을 몇 시간에서 몇 초로 단축시킬 수 있습니다.",
            overviewText2: "SOAR(Security Orchestration, Automation and Response) 플랫폼과 통합되어 복잡한 대응 워크플로우를 자동화하고 보안 팀의 효율성을 극대화합니다.",

            benefitsTitle: "주요 이점",
            benefit1Title: "즉각적인 대응",
            benefit1Desc: "위협 탐지 후 수 초 내에 자동으로 대응 조치를 실행하여 피해를 최소화합니다.",
            benefit2Title: "일관된 대응",
            benefit2Desc: "사람의 실수를 제거하고 모든 위협에 대해 일관되고 정확한 대응을 보장합니다.",
            benefit3Title: "인력 효율화",
            benefit3Desc: "반복적인 대응 작업을 자동화하여 보안 팀이 더 중요한 업무에 집중할 수 있게 합니다.",
            benefit4Title: "24/7 보호",
            benefit4Desc: "사람의 개입 없이도 연중무휴로 위협에 대응하여 지속적인 보안을 유지합니다.",

            howItWorksTitle: "작동 원리",
            howItWorks1Title: "위협 탐지 및 분류",
            howItWorks1Desc: "AI가 위협을 탐지하고 심각도와 유형에 따라 자동으로 분류합니다.",
            howItWorks2Title: "플레이북 선택",
            howItWorks2Desc: "위협 유형에 맞는 사전 정의된 대응 플레이북을 자동으로 선택합니다.",
            howItWorks3Title: "자동 대응 실행",
            howItWorks3Desc: "격리, 차단, 패치 적용 등의 대응 조치를 자동으로 실행합니다.",
            howItWorks4Title: "결과 모니터링 및 보고",
            howItWorks4Desc: "대응 결과를 모니터링하고 보안 팀에게 상세한 보고서를 제공합니다."
        },
        predictiveAnalytics: {
            title: "예측 분석",
            description: "미래의 위협을 사전에 식별하고 데이터의 추세와 패턴을 분석하여 위협 사냥 작업을 개선합니다.",
            overviewTitle: "개요",
            overviewText1: "예측 분석은 과거 데이터와 현재 트렌드를 분석하여 미래에 발생할 수 있는 보안 위협을 사전에 예측합니다. 이를 통해 조직은 위협이 실제로 발생하기 전에 선제적으로 방어 조치를 취할 수 있습니다.",
            overviewText2: "머신러닝과 통계 모델링을 활용하여 공격 가능성이 높은 자산을 식별하고, 취약점이 악용되기 전에 보안 강화 조치를 권장합니다.",

            benefitsTitle: "주요 이점",
            benefit1Title: "선제적 방어",
            benefit1Desc: "위협이 발생하기 전에 예측하고 대비하여 피해를 원천적으로 차단합니다.",
            benefit2Title: "리스크 우선순위화",
            benefit2Desc: "가장 위험한 자산과 취약점을 식별하여 보안 자원을 효율적으로 배분합니다.",
            benefit3Title: "향상된 위협 사냥",
            benefit3Desc: "잠재적 위협을 사전에 식별하여 능동적인 위협 사냥 활동을 지원합니다.",
            benefit4Title: "비용 절감",
            benefit4Desc: "사고 발생 후 대응보다 사전 예방이 훨씬 비용 효율적입니다.",

            howItWorksTitle: "작동 원리",
            howItWorks1Title: "과거 데이터 분석",
            howItWorks1Desc: "과거 보안 사고와 위협 데이터를 분석하여 패턴과 트렌드를 파악합니다.",
            howItWorks2Title: "예측 모델 구축",
            howItWorks2Desc: "머신러닝 알고리즘을 사용하여 미래 위협을 예측하는 모델을 학습합니다.",
            howItWorks3Title: "리스크 스코어링",
            howItWorks3Desc: "각 자산과 시스템에 대한 위험 점수를 계산하여 우선순위를 결정합니다.",
            howItWorks4Title: "권장 사항 제공",
            howItWorks4Desc: "예측된 위협에 대응하기 위한 구체적인 보안 조치를 권장합니다."
        },
        falsePositiveReduction: {
            title: "오탐률 감소",
            description: "양성 및 악성 활동의 차이점을 이해함으로써 보안 팀의 시간 소모적인 위협 평가가 줄어들어 오탐률이 감소합니다.",
            overviewTitle: "개요",
            overviewText1: "전통적인 보안 시스템의 가장 큰 문제 중 하나는 높은 오탐률(False Positive)입니다. AI 기반 오탐률 감소 기술은 정상 활동과 악성 활동을 정확하게 구분하여 보안 팀이 실제 위협에만 집중할 수 있도록 합니다.",
            overviewText2: "컨텍스트 인식 분석과 행동 기반 학습을 통해 정상적인 비즈니스 활동을 이해하고, 진짜 위협만을 정확하게 식별합니다.",

            benefitsTitle: "주요 이점",
            benefit1Title: "시간 절약",
            benefit1Desc: "오탐 조사에 소모되는 시간을 대폭 줄여 보안 팀의 생산성을 향상시킵니다.",
            benefit2Title: "정확한 탐지",
            benefit2Desc: "실제 위협과 정상 활동을 정확하게 구분하여 탐지 정확도를 높입니다.",
            benefit3Title: "알람 피로 감소",
            benefit3Desc: "불필요한 알람을 줄여 보안 팀의 알람 피로(Alert Fatigue)를 방지합니다.",
            benefit4Title: "비즈니스 연속성",
            benefit4Desc: "정상적인 비즈니스 활동이 보안 시스템에 의해 방해받지 않도록 보장합니다.",

            howItWorksTitle: "작동 원리",
            howItWorks1Title: "정상 행동 학습",
            howItWorks1Desc: "AI가 조직의 정상적인 사용자 및 시스템 행동 패턴을 학습합니다.",
            howItWorks2Title: "컨텍스트 분석",
            howItWorks2Desc: "이벤트의 맥락(시간, 위치, 사용자 역할 등)을 고려하여 위협 여부를 판단합니다.",
            howItWorks3Title: "신뢰도 점수 부여",
            howItWorks3Desc: "각 알람에 신뢰도 점수를 부여하여 우선순위를 결정합니다.",
            howItWorks4Title: "피드백 학습",
            howItWorks4Desc: "보안 팀의 피드백을 반영하여 지속적으로 탐지 정확도를 개선합니다."
        },
        iso27001: {
            title: "ISO 27001 인증",
            subtitle: "정보보안 경영시스템의 국제 표준 인증으로 조직의 정보자산을 체계적으로 보호합니다.",
            overviewTitle: "ISO 27001이란?",
            overviewText1: "ISO 27001은 조직이나 기업이 정보보안 경영시스템(Information Security Management System: ISMS)을 수립하여 이행하고 감시 및 검토, 유지, 개선하기 위해 필요한 요구사항을 명시한 국제표준입니다.",
            overviewText2: "국제표준화기구(ISO) 및 국제전기기술위원회(IEC)에서 제정한 정보보호 관리체계에 대한 국제표준으로서 Plan-Do-Check-Action(PDCA) 모델을 채택하여 정보자산의 기밀성, 무결성, 가용성을 실현합니다.",

            principlesTitle: "정보보안 3대 원칙",
            principle1Title: "기밀성 (Confidentiality)",
            principle1Desc: "접근이 인가된 사람만이 정보에 접근 가능함을 보장",
            principle2Title: "무결성 (Integrity)",
            principle2Desc: "정보 및 처리 방법의 정확성 및 완전성을 보호",
            principle3Title: "가용성 (Availability)",
            principle3Desc: "인가된 사용자가 필요시 정보 및 관련 자산에 접근하는 것을 보장",

            backgroundTitle: "도입 배경",
            backgroundList: "기업에게 돌이킬 수 없는 경제적 손실과 기업 이미지 손상을 초래하는 정보보안사고 확산|체계적인 정보 관리의 필요성 증대|정보자산과 고객정보의 보호 및 정보의 이용가치 제고를 통한 기업경쟁력 향상|시스템 표준을 통한 정보의 체계적이고 지속적인 관리",

            necessityTitle: "도입 필요성",
            necessity1Title: "보안 위협 증가",
            necessity1List: "인터넷 확산으로 인한 새로운 보안위협 증가|내부 정보 유출자의 증가|해킹에 의한 침해 사고의 증가|첨단 기술 및 중요 정보 유출",
            necessity2Title: "관리 체계 부재",
            necessity2List: "약 3/4의 조직이 보안문제를 처리할 수 있는 시스템 부재|30% 이상의 조직이 정보의 중요성을 인식하지 못함|관련 법규 및 규정에 대한 준수 필요|체계적이고 종합적인 정보보호 관리 필요",

            effectsTitle: "도입 효과",
            effect1Title: "위험 관리",
            effect1Desc: "조직의 위험을 올바르게 파악, 심사 및 관리",
            effect2Title: "경쟁력 향상",
            effect2Desc: "고객 정보 보호를 통한 신뢰성 및 경쟁력 제고",
            effect3Title: "자산 보호",
            effect3Desc: "이해관계자와 고객 데이터 등 조직 자산 보호",
            effect4Title: "지속적 개선",
            effect4Desc: "정기적인 심사를 통한 성과 모니터링",
            effect5Title: "비즈니스 연속성",
            effect5Desc: "정보시스템 보호 및 비즈니스 연속성 보장",
            effect6Title: "해외 진출",
            effect6Desc: "글로벌 시장 진출 시 경쟁 우위 확보",

            consultingTitle: "AISEURE ISO 27001 컨설팅 서비스",
            consultingStep1Title: "Gap Analysis (갭 분석)",
            consultingStep1Desc: "현재 조직의 정보보안 수준을 ISO 27001 기준과 비교하여 개선이 필요한 영역을 식별합니다.",
            consultingStep2Title: "Policy Development (정책 수립)",
            consultingStep2Desc: "조직에 맞는 정보보안 정책, 절차, 지침을 개발하고 문서화합니다.",
            consultingStep3Title: "Internal Audit Support (내부 감사 지원)",
            consultingStep3Desc: "인증 심사 전 내부 감사를 실시하여 준비 상태를 점검하고 개선사항을 도출합니다.",
            consultingStep4Title: "Certification Support (인증 지원)",
            consultingStep4Desc: "인증 심사 준비부터 인증 획득까지 전 과정을 지원하고 사후 관리를 도와드립니다."
        },
        ismsp: {
            title: "ISMS-P 인증",
            subtitle: "정보보호 및 개인정보보호 관리체계 인증으로 통합 컴플라이언스를 관리합니다.",
            overviewTitle: "ISMS-P란?",
            overviewText1: "ISMS-P(Information Security Management System - Personal Information)는 정보보호 및 개인정보보호를 위한 일련의 조치와 활동이 인증기준에 적합함을 한국인터넷진흥원(KISA) 또는 인증기관이 증명하는 제도입니다.",
            overviewText2: "기존의 정보보호 관리체계(ISMS)와 개인정보보호 관리체계(PIMS)를 통합한 인증으로, 조직의 정보보호와 개인정보보호를 통합적으로 관리할 수 있습니다.",

            legalBasisTitle: "법적 근거",
            legalBasis1Title: "정보통신망법",
            legalBasis1List: "제47조 (관리체계 인증)|시행령 제47조~제54조|시행규칙 제3조",
            legalBasis2Title: "개인정보보호법",
            legalBasis2List: "제32조의2 (인증)|시행령 제34조의2~제34조의8|관리체계 인증 등에 관한 고시",

            criteriaTitle: "인증 기준 (총 101개 항목)",
            criteria1Count: "16개",
            criteria1Title: "관리체계 수립 및 운영",
            criteria1List: "관리체계 기반 마련|위험관리|관리체계 운영|관리체계 점검 및 개선",
            criteria2Count: "64개",
            criteria2Title: "보호대책 요구사항",
            criteria2List: "정책, 조직, 자산관리|인적보안 / 외부자 보안|물리보안|인증 및 권한관리|접근통제 / 암호화 적용|시스템 및 서비스 관리|사고 예방 및 대응|재해복구",
            criteria3Count: "21개",
            criteria3Title: "개인정보 처리단계별",
            criteria3List: "개인정보 수집 시 보호조치|보유 및 이용 시 보호조치|제공 시 보호조치|파기 시 보호조치|정보주체 권리보호",

            targetTitle: "인증 대상",
            target1Title: "의무 인증 대상",
            target1List: "정보통신서비스 부문 전년도 매출액 100억원 이상|정보통신서비스 부문 전년도 3개월간 일일평균 이용자 수 100만명 이상|개인정보 처리자 중 전년도 말 기준 직전 3개월간 개인정보가 저장·관리되고 있는 이용자 수가 일일평균 100만명 이상",
            target2Title: "자율 인증 대상",
            target2List: "의무 인증 대상이 아닌 모든 기업 및 기관|정보보호 및 개인정보보호 관리 수준 향상을 원하는 조직|고객 신뢰 확보 및 경쟁력 강화를 원하는 조직",

            effectsTitle: "인증 효과",
            effect1Title: "법적 의무 준수",
            effect1Desc: "정보통신망법 및 개인정보보호법 준수 입증",
            effect2Title: "신뢰성 향상",
            effect2Desc: "고객 및 이해관계자에 대한 신뢰성 제고",
            effect3Title: "정보자산 보호",
            effect3Desc: "체계적인 정보보호 및 개인정보보호 관리",
            effect4Title: "리스크 관리",
            effect4Desc: "정보보호 및 개인정보 관련 리스크 최소화",
            effect5Title: "과태료 면제",
            effect5Desc: "인증 획득 시 과태료 경감 혜택",
            effect6Title: "경쟁력 강화",
            effect6Desc: "입찰 및 사업 수주 시 가점 부여",

            consultingTitle: "AISEURE ISMS-P 컨설팅 서비스",
            consultingStep1Title: "Risk Assessment (위험 평가)",
            consultingStep1Desc: "조직의 정보자산을 식별하고 위험을 평가하여 적절한 보호대책을 수립합니다.",
            consultingStep2Title: "Control Implementation (통제 구현)",
            consultingStep2Desc: "ISMS-P 인증기준에 따른 101개 통제항목을 조직 환경에 맞게 구현합니다.",
            consultingStep3Title: "Certification Readiness (인증 준비)",
            consultingStep3Desc: "모의 심사를 통해 인증 준비 상태를 점검하고 미비점을 개선합니다.",
            consultingStep4Title: "Continuous Improvement (지속적 개선)",
            consultingStep4Desc: "인증 획득 후에도 관리체계를 지속적으로 개선하고 갱신 심사를 지원합니다."
        },
        header: {
            aiFeaturesLabel: "AI 기능",
            servicesLabel: "서비스",
            aboutLabel: "회사 소개",
            contactButtonText: "상담 문의",
            aiFeature1: "적응형 학습",
            aiFeature2: "고급 패턴 인식",
            aiFeature3: "대규모 데이터 분석",
            aiFeature4: "자동화된 대응",
            aiFeature5: "예측 분석",
            aiFeature6: "오탐률 감소",
            service1: "ISO 27001",
            service2: "ISMS / ISMS-P",
            service3: "IT Internal Audit"
        },
        footer: {
            companyName: "AI Security",
            companyDesc: "Advanced Security Solutions for the AI Era.",
            aiFeaturesLabel: "AI 기능",
            servicesLabel: "Services",
            companyLabel: "Company",
            aboutLabel: "About",
            careersLabel: "Careers",
            contactLabel: "Contact",
            copyright: "© 2025 AI Security. All rights reserved."
        },
        contactForm: {
            nameLabel: "이름 *",
            companyLabel: "회사명",
            emailLabel: "이메일 *",
            phoneLabel: "연락처 *",
            messageLabel: "문의 내용 *",
            submitButtonText: "문의하기",
            submittingText: "전송 중...",
            successTitle: "문의가 접수되었습니다!",
            successDesc: "빠른 시일 내에 답변 드리겠습니다.",
            newInquiryButtonText: "새로운 문의 작성하기",
            errorText: "전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요."
        },
        featuresGrid: {
            title: "사이버 보안 방어를 강화하는 AI 기능"
        },
        methodologies: {
            title: "위협 탐지에 활용하는 AI",
            method1Title: "머신 러닝 알고리즘",
            method1Desc: "머신러닝 알고리즘은 새롭고 복잡한 위협을 신속하게 탐지하는 데 도움이 될 수 있습니다. 이러한 알고리즘은 과거 사고 데이터를 분석하여 패턴을 파악하고 잠재적 위협을 예측하여 위협 탐지의 정확도와 속도를 향상시킵니다.",
            method2Title: "데이터 처리 및 처리",
            method2Desc: "위협 탐지를 위한 데이터 처리에는 잠재적 위협을 식별하기 위해 방대한 양의 데이터를 수집, 정제 및 분석하는 과정이 포함됩니다. 이 과정에는 노이즈 필터링, 데이터 정규화, 그리고 AI 알고리즘을 적용하여 보안 침해, 사이버 공격 또는 맬웨어나 랜섬웨어와 같은 기타 악의적인 활동을 나타내는 이상 징후나 패턴을 탐지하는 과정이 포함됩니다.",
            method2SubTitle: "데이터 수집 소스:",
            method2List: "네트워크 트래픽 로그|시스템 이벤트 로그|사용자 활동 기록"
        }
    }
};
