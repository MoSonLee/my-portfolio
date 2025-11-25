import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import './Resume.css'

const Resume = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = {
    'allida': {
      title: '모두 알리다',
      subtitle: '강원대학교 인턴 & 프리랜서',
      period: '2022.12.21 ~ 2024.02.14',
      team: 'iOS 1명, AOS 1명, Server 1명, Design 1명, 기획 2명',
      description: '강원대학교 연계 스타트업 인턴으로 iOS 1인 개발 진행, 인턴 종료 후 프리랜서로 출시 및 업데이트 작업을 진행한 어플리케이션. 경조사 및 경조사비를 관리할 수 있는 서비스(iOS 14.0 이상 대응)',
      features: [
        '경조사 일정 CRUD',
        '전화번호 기반 지인 일정 리마인드 푸시 알림 서비스',
        '경조사비 생성 및 인증 기능'
      ],
      tech: ['Swift', 'MVVM', 'RxSwift', 'RxDataSources', 'RxGesture', 'Rx Input Output pattern', 'CodeBase UI', 'SnapKit', 'Kingfisher', 'Compositional Layout', 'Toast', 'NVActivityIndicatorView', 'IQKeyboardManager', 'FSCalendar', 'Moya', 'SwiftyRSA', 'Pagination', 'Social Login(Apple, Kakao, Google)', 'Firebase(auth, analytics, crashlytics)'],
      highlights: [
        'MVVM + Rx Input Output pattern을 사용해 유저가 행하는 action, 그 action에 따른 output을 정의함',
        'Social Login(Apple, Kakao, Google) 구현 - Apple에서는 두 번째 로그인부턴 이름, 이메일 값을 넘겨주지 않는 문제 해결',
        'Compositional Layout을 사용해 복잡한 레이아웃들을 적은 양의 코드로 컨트롤'
      ],
      troubleshooting: [
        {
          title: 'CollectionView Compositional Layout scroll issues',
          description: '가로 스크롤시 cell 크기가 커져야 하고, 세로 스크롤시 두번째 cell은 스크롤 되지 않고 뷰가 다 같이 올라가야함. visibleItemsInvalidationHandler api를 사용해 해결'
        },
        {
          title: 'Apple 회원가입 관련 문제',
          description: '두번 이상 소셜 로그인시 이름과 이메일 값을 주지 않는 문제를 서버에 이름, 이메일, socialId를 넣어주는 네트워크 로직과 socialId를 기반으로 유저 정보가 서버에 있는지 판별하는 네트워크 로직 추가로 해결'
        },
        {
          title: 'RxDataSources layout 갱신 문제',
          description: 'sections 값을 당장 바꿀 필요가 없을 땐 sectionsValueArray에 우선 넣어주고, collectionView의 값에 영향을 줄 때 sectionsValueArray와 sections의 값을 동일하게 맞춰준 후 accept해주어 해결'
        }
      ],
      appStoreLink: 'https://apps.apple.com/kr/app/모두알리다-경조사-소셜-플랫폼/id6447755601'
    },
    'fury': {
      title: 'Fury',
      subtitle: 'SeSAC 2nd',
      period: '2022.09.13 ~ 2022.10.07',
      team: 'iOS 1인 개발',
      description: '1인으로 진행한 프로젝트(IOS 14.0 이상 대응). 다이어리의 기본적인 CRUD 기능. 기존 다이어리와 차별성을 위해 설정한 미래의 시간에 일기를 작성 후 전송 가능 - 설정된 시간에 알림과 함께 일기 도착',
      features: [
        '다이어리 CRUD 기능',
        '미래의 시간에 일기 작성 후 전송',
        '설정된 시간에 알림과 함께 일기 도착'
      ],
      tech: ['Swift', 'MVVM', 'MVC', 'RxSwift', 'Rx Input Output pattern', 'Notification', 'Realm', 'Zip', '아이패드 대응', '다크모드 대응', 'Code base Layout', '현지화(다국어 지원)', 'Custom Font'],
      highlights: [
        '아이패드, 스마트폰 케이스를 구분해 다른 레이아웃 적용 - 뷰가 회전했을 때 레이아웃 재적용(viewWillTransition)',
        'RxSwift를 사용하여 반응형 프로그래밍 적용',
        'Realm을 사용한 데이터베이스 - Realm에 데이터를 구성해 줄 때 키를 사용해 암호화',
        'Localization(현지화) - 한국어, 영어, 중국어(간체, 번체), 인도네시아어, 태국어, 베트남어 지원'
      ],
      troubleshooting: [
        {
          title: 'iPad Layout',
          description: 'view를 가로, 세로 모드로 변경했을 때 레이아웃이 깨지는 오류를 viewWillTransition 함수를 사용해서 해결. Custom Font를 핸드폰과 동일하게 잡아주면 아이패드에선 상대적으로 너무 작게 보이는 문제를 해당 기기가 ipad인지 확인 후 font 크기를 다르게 잡아줌으로 해결'
        },
        {
          title: 'Realm 데이터 암호화',
          description: '데이터 백업을 하고 그 파일을 뜯어봤을 때 미래일기를 미리 확인할 수 있어서 그것을 막고자 Realm에 데이터를 구성해 줄 때 키를 사용해 암호화 시킴'
        }
      ],
      githubLink: 'https://github.com/MoSonLee/FutureDiary',
      appStoreLink: 'https://apps.apple.com/kr/app/fury-미래-일기/id6443563805',
      blogLink: 'https://s2ung.tistory.com/34'
    },
    'mongseal': {
      title: 'Mong:seal',
      subtitle: 'Depromeet',
      period: '2022.03.01 ~ 2022.07.01',
      team: 'iOS 3명, Server 2명, Design 3명, 기획 1명',
      description: 'Depromeet 동아리 11기에서 활동하며 진행한 프로젝트. SwiftUI와 Combine을 사용해 만든 꿈 해몽 다이어리',
      features: [
        '해몽 검색',
        '해몽, 꿈 일기 기록',
        '보관함',
        '해몽 공유'
      ],
      tech: ['SwiftUI', 'Combine', 'Alamofire', 'Nuke', 'CombineExt', 'PureSwiftUI', 'KakaoOpenSDK', 'Introspect', 'R.swift', 'SwiftLint'],
      highlights: [
        'SwiftUI와 Combine을 사용한 첫 프로젝트',
        'TCA(The Composable Architecture) 아키텍처로 화면 구현',
        '다양한 개발자분들, 디자이너, 기획 등 팀원들과 함께 커뮤니케이션 하는 법 학습'
      ],
      troubleshooting: [
        {
          title: 'TCA 아키텍처 관련 이슈들',
          description: 'TCA로 화면 구현시 다른 뷰를 불러올 때 나타나는 오류, button을 눌러 View 전환시키기, BackButton을 눌렀을 때 이전 화면으로 돌아가게 구현, optional 형태의 state를 받아올때 생기는 문제 등 다양한 이슈 해결'
        },
        {
          title: 'Combine 네트워크 오류',
          description: 'API를 연결해 Diary를 받아올 때 발생한 네트워크 오류 해결'
        }
      ],
      appStoreLink: 'https://apps.apple.com/us/app/몽실-mong-seal/id1622154270',
      githubLink: 'https://github.com/depromeet/mongsil-iOS'
    },
    'saessak': {
      title: '새싹',
      subtitle: 'SeSAC 2nd',
      period: '2022.11.08 ~ 2022.12.06',
      team: 'iOS 1명, Mentor(Server, Design) 2명',
      description: 'SeSAC 2기에서 진행한 SLP Project. 위치를 기반으로 매칭을 원하는 사용자와 스터디 요청 및 수락, 실시간 채팅 기능 제공',
      features: [
        '위치 기반 매칭',
        '스터디 요청 및 수락',
        '실시간 채팅 기능'
      ],
      tech: ['Swift', 'MVVM', 'RxSwift', 'RxDataSources', 'Rx Input Output pattern', 'SnapKit', 'Moya', 'Socket-io-client-swift', 'Realm', 'Firebase-ios-sdk'],
      highlights: [
        'Moya를 사용한 네트워크 레이어 추상화',
        '실시간 채팅 구현(Socket, Realm, Network) - 채팅 화면이 보일 때 서버 호출, Realm, socket을 모두 사용',
        'Firebase-ios-sdk를 통한 FCM Remote Notification, 번호 인증 사용'
      ],
      troubleshooting: [
        {
          title: 'cell 강한 순환 참조 문제',
          description: 'tableView 내의 cell을 눌렀을 때 cell UI를 변경해 줄 때 생겼던 문제. cell.button.rx.tap을 했을 때 dispose 해줄 때 cell.disposeBag가 아닌 self.disposeBag로 작성 후 실행했을 때 강한 순환 참조가 발생. cell내에 disposeBag를 선언 해주고 그것을 cell내의 prepareforReuse 함수내에서 기존의 disposeBag을 초기화 시켜 해결'
        }
      ],
      appStoreLink: '',
      githubLink: 'https://github.com/MoSonLee/ServiceLevelProject',
      blogLink: 'https://s2ung.tistory.com/31'
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <motion.div
      className="resume-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* 헤더 섹션 */}
      <motion.div
        className="resume-header"
        variants={cardVariants}
      >
        <motion.div
          className="profile-image"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img 
            src="/images/profile.jpg" 
            alt="이승후 프로필" 
            className="profile-photo"
          />
        </motion.div>
        <motion.h1
          className="name"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          이승후
        </motion.h1>
        <motion.p
          className="title"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          비즈니스와 사용자를 잇는 iOS 개발자
        </motion.p>
        <motion.div
          className="contact-info"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{ pointerEvents: 'auto' }}
        >
          <div className="contact-pill-row">
            <div className="contact-pill email-pill">📧 ronlee6235@gmail.com</div>
            <div className="contact-pill phone-pill">📱 010-9953-6235</div>
            <div className="contact-pill univ-pill">🎓 강원대 컴퓨터정보통신공학전공</div>
          </div>
          <div className="contact-link-row">
            <a className="contact-link-pill" href="https://github.com/MoSonLee" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>📀 GitHub</a>
            <a className="contact-link-pill" href="https://s2ung.tistory.com/" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>✏️ Blog</a>
            <a className="contact-link-pill" href="https://www.linkedin.com/in/seunghoo-lee-496b81265/" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>💼 LinkedIn</a>
          </div>
        </motion.div>
        <motion.p
          className="update-date"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          최근 업데이트일 : 2025.11.18
        </motion.p>
      </motion.div>

      {/* Introduce 섹션 */}
      <motion.div
        className="resume-card"
        variants={cardVariants}
        whileHover="hover"
      >
        <h2 className="card-title">👋 Introduce</h2>
        <div className="introduce-grid">
          <motion.div
            className="introduce-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="introduce-icon" style={{ background: 'linear-gradient(135deg, #ff6b6b 0%, #ffa500 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span role="img" aria-label="성장">📈</span>
            </div>
            <h3>기술적으로 더 발전하기 위한 노력</h3>
            <ul>
              <li>새로운 기술 스택을 익히는 것에 거부감이 없습니다.</li>
              <li>결합도를 줄이고 응집도를 가지는 코드를 작성하려 노력합니다.</li>
              <li>중복된 코드 작성이 아닌 재사용할 수 있는 코드를 작성합니다.</li>
              <li>SwiftUI 전환, 모듈화(Tuist) 적용, CoreML·Safari Extension 도입 등을 통해 실제 서비스에 새로운 스택을 적용해 왔습니다.</li>
            </ul>
          </motion.div>
          <motion.div
            className="introduce-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <div className="introduce-icon" style={{ background: 'linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span role="img" aria-label="융통성">💡</span>
            </div>
            <h3>능동적이고 융통성 있는 자세</h3>
            <ul>
              <li>기술적인 것도 중요하지만, 현재 상황과 가지고 있는 것을 인지하고, 능동적이고 융통성있게 결정해야한다고 생각하는 편입니다.</li>
              <li>현재 상황에서 우선순위를 따져 할 수 있는 것과 없는 것을 빠르게 인지합니다.</li>
              <li>결정된 사항에 대해선 믿고 따르는 것을 중요하게 생각합니다.</li>
            </ul>
          </motion.div>
          <motion.div
            className="introduce-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <div className="introduce-icon" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span role="img" aria-label="UIUX">🎨</span>
            </div>
            <h3>유저에게 더 나은 UI/UX를 위한 고민</h3>
            <ul>
              <li>유저에게 더 나은 UI/UX 애니메이션에 대해 고민합니다.</li>
              <li>유저에게 친화적인 앱을 구현하기 위해 노력합니다.</li>
              <li>실제 상용 서비스(Flybit, 모두알리다)에서 UX 개선을 통해 이탈 구간을 줄이고 사용자 리뷰를 개선한 경험이 있습니다.</li>
            </ul>
          </motion.div>
          <motion.div
            className="introduce-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <div className="introduce-icon" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span role="img" aria-label="서비스경험">🌐</span>
            </div>
            <h3>다양한 서비스 도메인 및 대규모 도입 경험</h3>
            <ul>
              <li>B2B·B2C·B2G 서비스를 모두 경험하며, 각 비즈니스 모델에 맞는 UX·기능 구조를 설계합니다.</li>
              <li>세종시 교육청 10,000대 규모 도입 경험이 있습니다.</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* Career 섹션 */}
      <motion.div
        className="resume-card"
        variants={cardVariants}
        whileHover="hover"
      >
        <h2 className="card-title">💼 Career</h2>
        <div className="experience-list">
          <motion.div
            className="experience-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
          >
            <div className="experience-layout">
              <div className="experience-left-panel">
                <img src="/images/knowwhere-soft-logo.png" alt="노웨어소프트 로고" className="company-logo-large" />
                <h3 className="company-title">노웨어소프트 – 모바일엔지니어 (정규직) [B2G · B2B]</h3>
                <ul className="company-info">
                  <li>모바일 엔지니어 정규직(2025.05 ~ 재직중)</li>
                  <li>
                    <a 
                      href="https://meercatch.com/main" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="company-link-btn"
                    >
                      Service Link
                    </a>
                  </li>
                </ul>
              </div>
              <div className="experience-right-panel">
                <h4 className="service-title">📌 Service</h4>
                <ul className="experience-details">
                  <li>MeerCat.ch_iOS 선정성·도박 유해 차단 AI 서비스 개발 및 운영</li>
                  <li>Safari Extension + 네트워크 확장을 활용한 웹 콘텐츠 분석 및 차단 기능 구현</li>
                  <li>CoreML 기반 YOLO 모델 연동 및 전처리, 후처리 로직 설계</li>
                  <li>Vision 기반 이미지 → 텍스트 추출(OCR) 파이프라인 구성</li>
                  <li>SwiftUI + Clean Architecture 기반 신규 화면 및 로직 개발</li>
                  <li>세종시 교육청 iPad 10,000대 도입 확정 프로젝트 담당</li>
                </ul>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="experience-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3 }}
          >
            <div className="experience-layout">
              <div className="experience-left-panel">
                <img src="/images/flybit-logo.png" alt="FLYBIT 로고" className="company-logo-large" />
                <h3 className="company-title">FLYBIT – 한국 디지털 거래소 (정규직) [B2C·금융]</h3>
                <ul className="company-info">
                  <li>iOS 개발 정규직(2024.06-2025.01)</li>
                  <li>
                    <a 
                      href="https://apps.apple.com/kr/app/flybit/id1570368673" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="company-link-btn"
                    >
                      App Store
                    </a>
                  </li>
                </ul>
              </div>
              <div className="experience-right-panel">
                <h4 className="service-title">📌 Service</h4>
                <ul className="experience-details">
                  <li>기존 TAT 신분증 로직에서 가상자산사업자 갱신 화면 추가 개발</li>
                  <li>코인 지정가 APNs 알림 서비스 개발</li>
                  <li>시장경보제 코인 시세 차이 경고 및 유의 항목 지정 신규화면 개발 (웹소켓 사용)</li>
                  <li>기존 운영 버그 대응
                    <ul className="experience-sub-details">
                      <li>Xcode Instrument을 사용해 메모리 누수 다수 해결</li>
                      <li>ViewModel을 공유하면서 발생하는 데이터 이슈사항 수정</li>
                      <li>ScrollView로 4개의 탭화면 좌표 이동 방식을 PageViewController 방식으로 수정</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="experience-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 }}
          >
            <div className="experience-layout">
              <div className="experience-left-panel">
                <img src="/images/allida-logo.png" alt="모두 알리다 로고" className="company-logo-large" />
                <h3 className="company-title">모두 알리다 – 주식회사 아이들 (인턴, 프리랜서) [B2C]</h3>
                <ul className="company-info">
                  <li>iOS 개발 (인턴, 프리랜서)(2022.12-2024.02)</li>
                  <li>
                    <a 
                      href="https://apps.apple.com/kr/app/%EB%AA%A8%EB%91%90%EC%95%8C%EB%A6%AC%EB%8B%A4-%EA%B0%80%EC%9E%A5-%ED%8E%B8%EB%A6%AC%ED%95%98%EA%B3%A0-%EC%95%88%EC%A0%84%ED%95%9C-%EC%9D%BC%EC%A0%95-%EA%B3%B5%EC%9C%A0-%EC%83%9D%ED%99%9C/id6447755601" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="company-link-btn"
                    >
                      App Store
                    </a>
                  </li>
                </ul>
              </div>
              <div className="experience-right-panel">
                <h4 className="service-title">📌 Service</h4>
                <ul className="experience-details">
                  <li>경조사 및 경조사비를 관리 플랫폼</li>
                  <li>iOS 14.0 이상 대응</li>
                  <li>경조사 일정 CRUD</li>
                  <li>전화번호 기반 지인 일정 리마인드 푸시 알림 서비스</li>
                  <li>경조사비 생성 및 인증 기능</li>
                  <li>기획부터 참여한 개발</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Timeline 섹션 */}
      <motion.div
        className="resume-card"
        variants={cardVariants}
        whileHover="hover"
      >
        <h2 className="card-title">📆 Timeline</h2>
        <div className="timeline-list">
          <motion.div
            className="timeline-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 }}
          >
            <div className="timeline-header">
              <span className="timeline-date">2025.05 ~ 재직중</span>
              <h3>노웨어소프트 모바일 엔지니어(정규직)</h3>
            </div>
          </motion.div>
          <motion.div
            className="timeline-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6 }}
          >
            <div className="timeline-header">
              <span className="timeline-date">2024.06 ~ 2025.01</span>
              <h3>한국디지털거래소 iOS 앱 개발(정규직)</h3>
            </div>
          </motion.div>
          <motion.div
            className="timeline-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.7 }}
          >
            <div className="timeline-header">
              <span className="timeline-date">2023.03 ~ 2024.02</span>
              <h3>주식회사 아이들 iOS 앱 개발(프리랜서)</h3>
            </div>
          </motion.div>
          <motion.div
            className="timeline-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.8 }}
          >
            <div className="timeline-header">
              <span className="timeline-date">2022.12 ~ 2023.02</span>
              <h3>주식회사 아이들 iOS 앱 개발(대학교 인턴)</h3>
            </div>
          </motion.div>
          <motion.div
            className="timeline-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.9 }}
          >
            <div className="timeline-header">
              <span className="timeline-date">2022.07 ~ 2022.12</span>
              <h3>SeSAC iOS 앱개발자 데뷔 과정</h3>
            </div>
          </motion.div>
          <motion.div
            className="timeline-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.0 }}
          >
            <div className="timeline-header">
              <span className="timeline-date">2022.03 ~ 2022.07</span>
              <h3>디프만 (동아리)</h3>
            </div>
          </motion.div>
          <motion.div
            className="timeline-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.1 }}
          >
            <div className="timeline-header">
              <span className="timeline-date">2016.03 ~ 2024.02</span>
              <h3>강원대학교 컴퓨터정보통신공학전공 졸업</h3>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Interesting About 섹션 */}
      <motion.div
        className="resume-card"
        variants={cardVariants}
        whileHover="hover"
      >
        <h2 className="card-title">✨ Interesting About</h2>
        <div className="interesting-grid">
          <motion.div
            className="interesting-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2 }}
          >
            <h3>🔥 물리적인 모듈화</h3>
            <p>단순히 접근 지정자와 폴더링으로만 이루어진 모듈화가 아닌, 물리적으로 모듈화 시키는 것에 관심이 있습니다. 물리적인 모듈화를 이용하는 툴로는 애플에서 제공하는 SwiftPackage와 Tuist를 사용해본 경험이 있습니다.</p>
          </motion.div>
          <motion.div
            className="interesting-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3 }}
          >
            <h3>🔥 CI/CD</h3>
            <p>개발완료 이후 자동화된 배포 프로세스를 구축합니다. 운영단계까진 아니지만 사이드프로젝트 수준에서 직접 Tuist와 연결시켜 Xcode Cloud를 이용한 CI/CD 시스템을 구성해본 경험이 있습니다. 혹시 CI/CD 빌드머신이 따로 있다면, 해당 빌드머신이 오동작하지 않도록 관리하는 것에도 관심이 있습니다.</p>
          </motion.div>
          <motion.div
            className="interesting-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4 }}
          >
            <h3>🔥 시나리오 테스트</h3>
            <p>작은 단위의 테스트를 연결시켜 시나리오 테스트를 구축하는 것에 관심이 있습니다. 기획에서 요구사항은 문서로 작성되어있고, 시나리오대로 테스트코드를 작성하여, 코드 수정이 일어나도 의도되지 않은 동작을 방지하여 앱 안정성을 높히고 싶습니다.</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Dev Experience 섹션 */}
      <motion.div
        className="resume-card"
        variants={cardVariants}
        whileHover="hover"
      >
        <h2 className="card-title">💻 Dev Experience</h2>
        <div className="dev-experience-content">
          <div className="diagram-container">
            {/* 이미지 대신 SVG, HTML+CSS로 흐름도 대체 */}
            <div className="dev-flow-diagram">
              <div className="dev-flow-top">
                <div className="dev-flow-box">기획</div>
                <span className="dev-flow-arrow">→</span>
                <div className="dev-flow-box">디자인</div>
                <span className="dev-flow-arrow">→</span>
                <div className="dev-flow-box">서버개발</div>
                <span className="dev-flow-arrow">→</span>
                <div className="dev-flow-box">클라이언트개발</div>
                <span className="dev-flow-arrow">→</span>
                <div className="dev-flow-box">스모크테스트</div>
              </div>
              <div className="dev-flow-bottom">
                <div className="dev-flow-box">세니티</div>
                <span className="dev-flow-arrow">→</span>
                <div className="dev-flow-box">배포열차출발</div>
                <span className="dev-flow-arrow">→</span>
                <div className="dev-flow-box">QA기간</div>
                <span className="dev-flow-arrow">→</span>
                <div className="dev-flow-box">출시</div>
                <span className="dev-flow-arrow">→</span>
                <div className="dev-flow-end-arrow" />
              </div>
            </div>
          </div>
          <ul>
            <li>기획 → 디자인 → 서버 → 클라이언트 → QA → 출시까지 <strong>전체 사이클 참여 경험</strong></li>
            <li>6개월 이상 장기 프로젝트와, 1~2주 단위 스프린트 기반 소규모 프로젝트 모두 경험</li>
            <li>안정적으로 큰 서비스 출시를 위해 시도를 해봤던, 인상 깊었던 개발 주기.</li>
            <li>주로 개발기간 1, 2주 단위에 작은 개발을 해서, 이후에는 스모크와 세니티는 생략</li>
          </ul>
        </div>
      </motion.div>

      {/* Main Ability 섹션 */}
      <motion.div
        className="resume-card"
        variants={cardVariants}
        whileHover="hover"
      >
        <h2 className="card-title">⚡ Main Ability</h2>
        <div className="ability-content">
          <div className="ability-section-bg">
            <div className="ability-layout-row">
              <div className="ability-bubblemap-wrapper">
                <div className="ability-diagram-section">
                  {/* 이미지 대신 HTML 반응형 원형 버블맵 */}
                  <div className="ability-bubble-map">
                    <div className="ability-bubble">웹 소켓<br/>(실시간)</div>
                    <div className="ability-bubble">모듈화<br/>(Tuist)</div>
                    <div className="ability-bubble">웹 브릿지 연결<br/>(웹과 핑퐁)</div>
                    <div className="ability-bubble">CI/CD<br/>(Xcode Cloud)</div>
                    <div className="ability-bubble">인증 세션 관리</div>
                  </div>
                </div>
              </div>
              <div className="ability-list-wrapper">
                <div className="ability-list-section">
                  <h4 className="ability-list-title">📌 ETC</h4>
                  <ul className="ability-list">
                    <li>ChatGPT 이용한 개발</li>
                    <li>앱내 DB 사용 CRUD 구현</li>
                    <li>Firebase 모니터링</li>
                    <li>소셜 로그인 기능 구현(카카오, 구글, 애플)</li>
                    <li>다크모드 대응</li>
                    <li>아이패드 멀티스크린 대응</li>
                    <li>현지화(Localization) 지원</li>
                    <li>커스텀 폰트 지원</li>
                    <li>Safari Extension / Network Extension(DNS) 기반 iOS 시스템 레벨 기능 연동</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Project 섹션 */}
      <motion.div
        className="resume-card"
        variants={cardVariants}
        whileHover="hover"
      >
        <h2 className="card-title">🚀 Project</h2>
        <div className="project-details-grid">
          {Object.entries(projects).map(([key, project]) => (
            <motion.div
              key={key}
              className="project-detail-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5 }}
              whileHover={{ scale: 1.02, y: -5 }}
              onClick={() => setSelectedProject(key)}
              style={{ cursor: 'pointer' }}
            >
              <div className="project-detail-screenshot">
                <img 
                  src={`/images/${key}-screenshots.png`} 
                  alt={`${project.title} 스크린샷`} 
                  className="project-detail-image"
                />
              </div>
              <div className="project-detail-info">
                <h3>{project.title}</h3>
                <p className="project-detail-subtitle">{project.subtitle}</p>
                <div className="project-detail-meta">
                  <span>📅 {project.period}</span>
                  <span>👥 {project.team}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 기술 스택 */}
      <motion.div
        className="resume-card"
        variants={cardVariants}
        whileHover="hover"
      >
        <h2 className="card-title">🛠️ 기술 스택</h2>
        <div className="tech-stack-content">
          <div className="tech-category">
            <h3>Language & iOS</h3>
            <div className="skills-grid">
              {['Swift', 'SwiftUI', 'UIKit', 'RxSwift', 'MVVM'].map((skill, index) => (
                <motion.div
                  key={skill}
                  className="skill-badge"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.5 + index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
          <div className="tech-category">
            <h3>AI / System Extension</h3>
            <div className="skills-grid">
              {['CoreML', 'Vision', 'SafariExtension'].map((skill, index) => (
                <motion.div
                  key={skill}
                  className="skill-badge"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.6 + index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {skill}
                </motion.div>
              ))}
              <motion.div
                key="NetworkExtension"
                className="skill-badge skill-badge-wide"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.9, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                NetworkExtension
              </motion.div>
            </div>
          </div>
          <div className="tech-category">
            <h3>Data & Infra</h3>
            <div className="skills-grid">
              {['CoreData', 'Realm', 'Firebase Monitoring'].map((skill, index) => (
                <motion.div
                  key={skill}
                  className="skill-badge"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.7 + index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
          <div className="tech-category">
            <h3>배포 Tool</h3>
            <div className="skills-grid">
              {['TestFlight', 'Xcode Cloud', 'App Store Connect'].map((skill, index) => (
                <motion.div
                  key={skill}
                  className="skill-badge"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.8 + index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
          <div className="tech-category">
            <h3>협업 Tool</h3>
            <div className="skills-grid">
              {['Figma', 'Jira', 'Slack', 'Postman', 'Swagger', 'Adobe XD'].map((skill, index) => (
                <motion.div
                  key={skill}
                  className="skill-badge"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.9 + index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && projects[selectedProject] && (
          <motion.div
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="project-modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="project-modal-close"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </button>
              <div className="project-modal-header">
                <h2>{projects[selectedProject].title}</h2>
                <p className="project-modal-subtitle">{projects[selectedProject].subtitle}</p>
                <div className="project-modal-meta">
                  <span>📅 {projects[selectedProject].period}</span>
                  <span>👥 {projects[selectedProject].team}</span>
                </div>
              </div>
              
              <div className="project-modal-body">
                <div className="project-modal-section">
                  <h3>📱 앱 소개</h3>
                  <div className="project-modal-screenshot">
                    <img 
                      src={`/images/${selectedProject}-screenshots.png`} 
                      alt={`${projects[selectedProject].title} 스크린샷`} 
                      className="modal-screenshot-image"
                    />
                  </div>
                  <p>{projects[selectedProject].description}</p>
                  <ul>
                    {projects[selectedProject].features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                {projects[selectedProject].troubleshooting && projects[selectedProject].troubleshooting.length > 0 && (
                  <div className="project-modal-section">
                    <h3>🔧 Trouble Shooting</h3>
                    {projects[selectedProject].troubleshooting.map((item, idx) => (
                      <div key={idx} className="troubleshooting-item">
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="project-modal-section">
                  <h3>🛠️ 사용 기술 스택</h3>
                  <div className="tech-tags">
                    {projects[selectedProject].tech.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                {projects[selectedProject].highlights && projects[selectedProject].highlights.length > 0 && (
                  <div className="project-modal-section">
                    <h3>⭐ 주요 기술</h3>
                    <ul>
                      {projects[selectedProject].highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="project-modal-links">
                  {projects[selectedProject].appStoreLink && (
                    <a 
                      href={projects[selectedProject].appStoreLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link-btn"
                    >
                      📱 App Store
                    </a>
                  )}
                  {projects[selectedProject].githubLink && (
                    <a 
                      href={projects[selectedProject].githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link-btn"
                    >
                      💻 GitHub
                    </a>
                  )}
                  {projects[selectedProject].blogLink && (
                    <a 
                      href={projects[selectedProject].blogLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link-btn"
                    >
                      ✏️ Blog
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Resume
