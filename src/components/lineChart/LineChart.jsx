import { LineChart as Lc, Line } from 'recharts';

export default function LineChart() {

    const mathMarks = [
        {
          "student_id": 1,
          "student_name_en": "Alice",
          "student_name_bn": "অ্যালিস",
          "bangla_marks": 78,
          "english_marks": 85
        },
        {
          "student_id": 2,
          "student_name_en": "Bob",
          "student_name_bn": "বব",
          "bangla_marks": 82,
          "english_marks": 78
        },
        {
          "student_id": 3,
          "student_name_en": "Charlie",
          "student_name_bn": "চার্লি",
          "bangla_marks": 90,
          "english_marks": 92
        },
        {
          "student_id": 4,
          "student_name_en": "Daisy",
          "student_name_bn": "ডেইজি",
          "bangla_marks": 85,
          "english_marks": 88
        },
        {
          "student_id": 5,
          "student_name_en": "Ethan",
          "student_name_bn": "ইথান",
          "bangla_marks": 74,
          "english_marks": 79
        },
        {
          "student_id": 6,
          "student_name_en": "Fiona",
          "student_name_bn": "ফিওনা",
          "bangla_marks": 88,
          "english_marks": 91
        },
        {
          "student_id": 7,
          "student_name_en": "George",
          "student_name_bn": "জর্জ",
          "bangla_marks": 67,
          "english_marks": 72
        },
        {
          "student_id": 8,
          "student_name_en": "Hannah",
          "student_name_bn": "হান্না",
          "bangla_marks": 95,
          "english_marks": 95
        },
        {
          "student_id": 9,
          "student_name_en": "Ian",
          "student_name_bn": "ইয়ান",
          "bangla_marks": 80,
          "english_marks": 83
        },
        {
          "student_id": 10,
          "student_name_en": "Jasmine",
          "student_name_bn": "জ্যাসমিন",
          "bangla_marks": 89,
          "english_marks": 87
        }
      ]
      
      
      
  return (
    <div>
        <Lc width={1400} height={400} data={mathMarks}>
            <Line dataKey="bangla_marks" stroke="#8884d8" ></Line>
            <Line dataKey="english_marks" stroke="#ffffff" ></Line>
        </Lc>
    </div>
  )
}
