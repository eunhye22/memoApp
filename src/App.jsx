import { useState, memo } from "react";
import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { createSvgIcon } from "@mui/material/utils";
import TextField from "@mui/material/TextField";

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

	// 텍스트 박스 State
	const [text, setText] = useState("");

	// 메모 리스트 State
	const [memoList, setMemoList] = useState([]);

	// 텍스트 입력 event
	const handleInputChange = (e) => {
		setText(e.target.value);
		console.log("글자 입력중..text 상태 변경");
	};

	// 추가 버튼 click event
	const onClickInsert = () => {
		const newMemos = [...memoList];
		newMemos.push(text);
		setMemoList(newMemos);
		setText("");
		console.log("추가완료!", newMemos);
	};

	// 삭제 버튼 click event
	const onClickRemove = (index) => {
		const newMemos = [...memoList];
		newMemos.splice(index, 1);
		setMemoList(newMemos);
		console.log("삭제완료!");
	};

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
					style={{ cursor: "pointer", fontSize: "40px", padding: "5px" }}
				/>
			</InsertDiv>

			<MemoBox>
				<h1>Memo List</h1>
				<ul>
					{memoList.map((memo, index) => (
						<li key={memo}>
							<MemoWrapper>
								<p>{memo}</p>
								<IconButton
									onClick={() => onClickRemove(index)}
									aria-label="delete"
									size="large"
								>
									<DeleteIcon fontSize="inherit" />
								</IconButton>
								{/* <button onClick={() => onClickRemove(index)}>삭제하기</button> */}
							</MemoWrapper>
						</li>
					))}
				</ul>
			</MemoBox>
		</>
	);
});

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

const InsertDiv = styled.div`
  margin: 30px;
`;
