import { LabelUpcoming } from "./LabelUpcoming";
import { propsTask } from "../../interfaces/propsTask";

export function LabelUpcomingList({ dataList }: { dataList: propsTask[] }) {
  return dataList.map((data) => <LabelUpcoming data={data} key={data._id} />);
}
