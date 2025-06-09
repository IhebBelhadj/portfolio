"use client";
import { CodeBlock, dracula } from "react-code-blocks";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const formatCode = (values: FormValues) => {
  const currentDate = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return `const button = document.querySelector('#sendBtn');

const message = {
  name: "${values.name}",
  email: "${values.email}",
  message: \`${values.message}\`,
  date: "${currentDate}"
}

button.addEventListener('click', () => {
  form.send(message);
})
`;
};

const customTheme = {
  ...dracula,
  backgroundColor: "transparent",
};

export function ContactCodePreview({ values }: { values: FormValues }) {
  const code = formatCode(values);

  return (
    <div className="h-full p-4 font-mono text-sm">
      <CodeBlock
        text={code}
        language="javascript"
        showLineNumbers={true}
        theme={customTheme}
        customStyle={{
          backgroundColor: "transparent",
          height: "100%",
          padding: "0",
        }}
        codeContainerStyle={{
          backgroundColor: "transparent",
        }}
      />
    </div>
  );
}
