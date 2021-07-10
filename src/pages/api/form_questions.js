// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export default function handler(req, res) {
  res.status(200).json({
    questions: [
      {
        personal: [
          {
            key: "full_name",
            value: "",
            question_text: "What's your name?",
            response_type: "text_input_2",

          },
          {
            key: "friend_full_name",
            value: "",
            question_text: "What's your friend / loved one's name?",
            response_type: "text_input_2",
          },
          {
            key: "friend_email",
            value: "",
            question_text: "What's your friend / loved one's email address?",
            response_type: "text_input_1",
          },
          {
            key: "year_birth",
            value: "",
            question_text: "Year of Birth",
            response_type: "text_input_1",
          },
        ],
      },
      {
        legal: [
          {
            key: "need_will",
            value: "",
            question_text: "Do you have a will?",
            response_type: "yes_no",
            response_options: ["yes", "no"],
            add_to_array: [
              { title: "", description: "", url: "" },
              { title: "", description: "", url: "" },
              { title: "", description: "", url: "" },
            ],
          },
          {
            key: "need_health_executor",
            value: "",
            question_text: "Have you already appointed your health executor?",
            response_type: "yes_no",
            response_options: ["yes", "no"],
            add_to_array: [
              { title: "Health Executor Resource", description: "", url: "" },
            ],
          },
        ],
      },
      {
        care: [
          {
            key: "need_housing",
            value: "",
            question_text: "Are you looking for housing?",
            response_type: "yes_no",
            response_options: ["yes", "no"],
          },
          {
            key: "need_medicaid",
            value: "",
            question_text: "Have you applied for medicaid?",
            response_type: "yes_no",
            response_options: ["yes", "no"],
          },
        ],
      },
      {
        dementia: [
          {
            key: "memory_problems",
            value: "",
            question_text: "",
            response_type: "yes_no",
            response_options: ["yes", "no"],
          },
          {
            key: "hearing_difficulty",
            value: "",
            question_text: "have difficulty hearing?",
            response_type: "yes_no",
            response_options: ["yes", "no"],
            add_to_array: [
              { title: "Audiology Resources", description: "", url: "" },
            ],

          },
        ],
      },
    ],
  });
}