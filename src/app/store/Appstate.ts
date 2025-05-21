import { create } from 'zustand'

// 예측 결과 타입 정의
export interface PredictionResult {
  class: string
  confidence: number
  bbox?: {
    x: number
    y: number
    width: number
    height: number
  }
}

// 스토어 상태 타입 정의
interface AppState {
  // 서버 상태
  isServerOnline: boolean
  setServerStatus: (status: boolean) => void

  // 이미지 관련
  selectedImage: File | null
  selectedImageUrl: string | null
  setSelectedImage: (file: File | null) => void

  // 예측 결과
  predictionResults: PredictionResult[]
  setPredictionResults: (results: PredictionResult[]) => void

  // 로딩 상태
  isLoading: boolean
  setLoading: (loading: boolean) => void

  // 에러 상태
  error: string | null
  setError: (error: string | null) => void

  // 상태 초기화
  resetState: () => void
}

// Zustand 스토어 생성
const useAppStore = create<AppState>((set) => ({
  // 초기 상태
  isServerOnline: false,
  selectedImage: null,
  selectedImageUrl: null,
  predictionResults: [],
  isLoading: false,
  error: null,

  // 상태 변경 함수들
  setServerStatus: (status) => set({ isServerOnline: status }),

  setSelectedImage: (file) => {
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      set({ selectedImage: file, selectedImageUrl: imageUrl })
    } else {
      set({ selectedImage: null, selectedImageUrl: null })
    }
  },

  setPredictionResults: (results) => set({ predictionResults: results }),

  setLoading: (loading) => set({ isLoading: loading }),

  setError: (error) => set({ error }),

  // 상태 초기화 함수
  resetState: () =>
    set({
      selectedImage: null,
      selectedImageUrl: null,
      predictionResults: [],
      isLoading: false,
      error: null,
    }),
}))

export default useAppStore
