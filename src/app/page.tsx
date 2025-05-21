'use client'

const navStyle: React.CSSProperties = {
  width: '100%',
  padding: '16px 0',
  borderBottom: '1px solid #eee',
  textAlign: 'center',
  fontWeight: 700,
  fontSize: 22,
  letterSpacing: 2,
  background: '#fff',
}

const mainImgStyle: React.CSSProperties = {
  display: 'block',
  margin: '32px auto 16px auto', // 버튼과의 간격 조정
  maxWidth: 320,
  width: '100%',
  borderRadius: 16,
  boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
}

const btnStyle: React.CSSProperties = {
  display: 'inline-flex', // 버튼을 가운데 정렬
  justifyContent: 'center',
  alignItems: 'center',
  gap: 8,
  padding: '8px 16px',
  border: '1px solid #ddd',
  borderRadius: 8,
  background: '#f9f9f9',
  cursor: 'pointer',
}

export default function Page() {
  const toTestPage = () => {
    window.location.href = '/api'
  }

  return (
    <div>
      <nav style={navStyle}>Hanamory</nav>
      <div style={{ textAlign: 'center' }}>
        <img
          src='/image/flower_1.jpg'
          alt='꽃 이미지'
          style={mainImgStyle}
        />
        ㄴ
        <button
          style={btnStyle}
          onClick={() => toTestPage()}
        >
          API 테스트 페이지로 이동
        </button>
      </div>
    </div>
  )
}
