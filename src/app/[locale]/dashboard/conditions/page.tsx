import DynamicConditions from '@/components/dashboard/conditions/dynamicConditions';
import FixedConditions from '@/components/dashboard/conditions/fixedConditions';
import { getCommunes, getFixedConditions, getToken } from "@/app/action";
import Communes from "@/components/dashboard/communes/communes";

import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { useLocale } from "next-intl";


const Page =async  () => {
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

  const queryClient = new QueryClient();
  const token=await getToken();
  await queryClient.prefetchQuery({
    queryKey:["fixedConditions"],
    queryFn:()=>getFixedConditions()
  })     
  
  return (
    <div className='mt-10 mr-12'>
      <p className="text-2xl font-semibold">The conditions</p>
      <HydrationBoundary state={dehydrate(queryClient)}>
          <FixedConditions token={token!}/>
          <DynamicConditions/>
      </HydrationBoundary>
    </div>
  );
};

export default Page;
