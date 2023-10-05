import Button from "@/components/atoms/Button";

export default function Editor(){
    return(
    <div>
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
        <textarea className="border border-primary h-96 resize-none"></textarea>
    </div>
    )
}