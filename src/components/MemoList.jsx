import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export const MemoList = (props) => {
    const { memoList, onClickDelete } = props;

    return (
        <MemoBox>
            <h1>Memo List</h1>
            <ul>
                {memoList.map((memo, index) => (
                    <li key={memo}>
                        <MemoWrapper>
                            <p>{memo}</p>
                            <IconButton
                                onClick={() => onClickDelete(index)}
                                aria-label="delete"
                                size="large"
                            >
                                <DeleteIcon fontSize="inherit" />
                            </IconButton>
                            {/* <button onClick={() => onClickDelete(index)}>삭제하기</button> */}
                        </MemoWrapper>
                    </li>
                ))}
            </ul>
        </MemoBox>
    );
};

const MemoBox = styled.div`
    margin: 30px;
    border: solid 1px #ccc;
    padding: 20px;
`;

const MemoWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 20px;
`;
