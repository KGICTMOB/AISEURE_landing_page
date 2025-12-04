export interface ContentSection {
    [key: string]: string;
}

export interface ContentData {
    sections: {
        [key: string]: ContentSection;
    };
}

export const initialContent: ContentData = {
    sections: {
        aiThreatHero: {
            title: "현대 위협 탐지에 AI는 가장 중요한 솔루션",
            description1: "AI 시스템은 이제 사이버 보안 의사 결정의 초석입니다. 이러한 시스템은 광범위한 위협에 능숙하게 대응하고 매우 정확한 사고 대응 전략을 자동화합니다. 이러한 발전은 빠르게 진화하는 사이버 위협의 본질과 방대한 양의 위협 인텔리전스 입력을 관리해야 하는 과제에 대응하는 데 매우 중요합니다.",
            description2: "AI 기반 위협 탐지는 IoT 기기, 클라우드 환경, 모바일 기기 등 공격 벡터의 확장과 같이 탐지 및 완화가 어려운 진화하는 위협 전술을 방지하도록 설계되었고, 랜섬웨어를 비롯한 사이버 공격의 규모와 속도가 증가하는 상황에 대응하는 것이 목표입니다.",
            buttonText: "주요 기능 살펴보기"
        }
    }
};
