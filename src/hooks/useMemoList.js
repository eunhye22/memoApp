import { useCallback, useState } from "react";

// 메모 목록에 관한 사용자 정의 훅
export const useMemoList = () => {

    // 메모 목록 State
    const [memoList, setMemoList] = useState([]);

    // 메모 추가 로직
    const addMemo = useCallback((text) => {

        // State 변경을 정상적으로 감지하기 위해 새로운 배열 생성
        const newMemoList = [...memoList];

        // 텍스트 박스의 입력 내용을 메모 배열에 추가
        newMemoList.push(text);
        setMemoList(newMemoList);

        // 의존 배열을 잊지 않도록 memoList 추가
    }, [memoList]);

    // 메모 삭제 로직
    const deleteMemo = useCallback((index) => {
        
        const newMemoList = [...memoList];

        newMemoList.splice(index, 1);
        setMemoList(newMemoList);
    }, [memoList]);

    return { memoList, addMemo, deleteMemo };
};

