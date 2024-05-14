import DynamicConditions from '@/components/dashboard/conditions/dynamicConditions';
import FixedConditions from '@/components/dashboard/conditions/fixedConditions';

const Page = () => {
  // const [inputText, setInputText] = useState<string>('');
  // const [textList, setTextList] = useState<string[]>([]);

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setInputText(e.target.value);
  // };

  // const handleAddText = () => {
  //   if (inputText.trim() !== '') {
  //     setTextList([...textList, inputText]);
  //     setInputText('');
  //   }
  // };

  // const handleModifyText = (index: number) => {
  //   const newText = prompt('Enter the new conditons:', textList[index]);
  //   if (newText !== null && newText.trim() !== '') {
  //     const newList = [...textList];
  //     newList[index] = newText;
  //     setTextList(newList);
  //   }
  // };

  // const handleDeleteText = (index: number) => {
  //   const newList = textList.filter((_, i) => i !== index);
  //   setTextList(newList);
  // };

  return (
    <div className='mt-10 mr-12'>
      <p className="text-2xl font-semibold">The conditions</p>
        <FixedConditions/>
        <DynamicConditions/>
    </div>
  );
};

export default Page;
