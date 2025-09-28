import { getMyInfo } from '@/apis/auth.api';
import { tokenAtom, userAtom } from '@/atoms/auth.atom';
import { useAtom } from 'jotai';
import { useEffect } from 'react';

// 웹이 처음 로드 될 경우 인증 상태 확인 후
// 토큰이 있을 경우 자동으로 사용자 정보 불러옴
export default function AuthLoader() {
  const [token, setToken] = useAtom(tokenAtom);
  const [user, setUser] = useAtom(userAtom);

  useEffect(() => {
    const checkAuthStatus = async () => {
      // sessionStorage에 토큰 O, 현재 user 상태 null
      if (token && !user) {
        try {
          const userInfo = await getMyInfo();
          setUser(userInfo);
        } catch (error) {
          console.error('자동 로그인 실패 (토큰 만료 등): ', error);
          setToken(null);
          setUser(null);
        }
      }
    };

    checkAuthStatus();
  }, [token, user, setToken, setUser]);

  return null;
}
