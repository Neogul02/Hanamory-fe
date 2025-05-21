import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hanamory',
  description: 'Yolov5 기반 꽃 이미지 판별',
}

const bodyStyle: React.CSSProperties = {
  fontFamily: "'Pretendard', sans-serif",
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
}

const containerStyle: React.CSSProperties = {
  width: '100%',
  maxWidth: 1020,
  paddingLeft: 16,
  paddingRight: 16,
  boxSizing: 'border-box',
  // 반응형 대응 (간단 예시)
  // 필요시 JS로 window.innerWidth 체크해서 동적으로 조정 가능
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='ko'>
      <head>
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css'
        />
      </head>
      <body style={bodyStyle}>
        <div style={containerStyle}>{children}</div>
      </body>
    </html>
  )
}
