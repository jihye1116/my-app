import Button from "@/components/atoms/Button";
import Editor from "../../components/atoms/Editor";


export default function WritePage(){
    return <section>
        <div>
        <input type="text" 
            className="border border-primary"
            placeholder="제목을 작성해 주세요"
        />
        <div className="flex item-center justify-between">
            <input type="file"/>
            <Button>작성완료</Button>
        </div>
        </div>
        <Editor/>
    </section>
}