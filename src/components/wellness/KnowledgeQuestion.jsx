import { useState } from "react"
import { Radio } from "@mantine/core"

function KnowledgeQuestion() {
  const [value, setValue] = useState("react")

  return (
    <Radio.Group
      value={value}
      onChange={setValue}
      orientation="vertical"
      label="Which of the following is not a specific element of duodenal ulcers?"
      description="Based on your specialty."
      offset="sm"
      size="md"
    >
      <Radio value="wrong-1" color="red" label="Primarily affects males" />
      <Radio value="wrong-2" color="red" label="Occasional malignancy" />
      <Radio value="wrong-3" color="red" label="Can lead to weight gain" />
      <Radio
        value="correct"
        color="green"
        label="Affects individuals over 65"
      />
    </Radio.Group>
  )
}
export default KnowledgeQuestion
