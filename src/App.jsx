import { useState, memo, useCallback, useMemo } from "react";
import styled from "styled-components";
import { createSvgIcon } from "@mui/material/utils";
import TextField from "@mui/material/TextField";
import { MemoList } from "./components/MemoList";
import { useMemoList } from "./hooks/useMemoList";

const PlusIcon = createSvgIcon(
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
        />
    </svg>,
    "Plus"
);

export const App = memo(() => {
    console.log("App 렌더링");

    // 사용자 정의 훅으로 각각 얻기
    const { memoList, addMemo, deleteMemo } = useMemoList();

    // 텍스트 박스 State
    const [text, setText] = useState("");

/*     // 메모 목록 State
    const[memoList, setMemoList] = useState([]); */

    // 텍스트 입력 event
    const handleInputChange = (e) => {
        setText(e.target.value);
        console.log("글자 입력중..text 상태 변경");
    };

    // 추가 버튼 click event
    const onClickInsert = () => {
/*         const newMemos = [...memoList];
        newMemos.push(text);
        setMemoList(newMemos); */
        addMemo(text);
        setText("");
        console.log("추가완료!");
    };

    // 삭제 버튼 click event
    const onClickDelete = useCallback(
        (index) => {
/*             const newMemos = [...memoList];
            newMemos.splice(index, 1);
            setMemoList(newMemos); */
            deleteMemo(index);
            console.log("삭제완료!");
        },
        [deleteMemo]
    );

    return (
        <>
            <InsertDiv>
                <TextField
                    id="outlined-basic"
                    value={text}
                    onChange={handleInputChange}
                    label="Text"
                    variant="outlined"
                />
                <PlusIcon
                    color="primary"
                    onClick={onClickInsert}
                    style={{
                        cursor: "pointer",
                        fontSize: "40px",
                        padding: "5px",
                    }}
                />
            </InsertDiv>
            <MemoList memoList={memoList} onClickDelete={onClickDelete} />
        </>
    );
});

const InsertDiv = styled.div`
    margin: 30px;
`;
