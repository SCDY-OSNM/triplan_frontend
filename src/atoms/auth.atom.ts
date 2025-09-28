import { User } from '@/interfaces/auth.interfaces';
import { atom } from 'jotai';
import { atomWithStorage, createJSONStorage } from 'jotai/utils';

const storage = createJSONStorage<string | null>(() => sessionStorage);

// 엑세스 토큰 관리
export const tokenAtom = atomWithStorage<string | null>(
  'accessToken', // sessionStorage에 저장될 key
  null, // 초기값
  storage,
  { getOnInit: true } // 앱 시작 시 sessionStorage 값을 즉시 atom에 반영
);

// 로그인한 사용자 정보 관리
// 쿠키에 뭐가 남았는지 자꾸 에러 발생
// export const userAtom = atom<User | null>(null);

export const userAtom = atom(
  null as User | null, // 첫 번째 인자: 초기값 (타입을 명확히 하기 위해 as 사용)
  (get, set, newUser: User | null) => {
    // 두 번째 인자: 값을 어떻게 업데이트할지에 대한 로직
    set(userAtom, newUser); // userAtom 자신을 새로운 값(newUser)으로 설정
  }
);

// 로그인 여부
export const isLoggedInAtom = atom(get => get(tokenAtom) !== null);
