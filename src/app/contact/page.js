import ContactCard from '../../components/ContactCard';

export default function Contact() {
  return (
    <div className="wrapper p-[16px] flex flex-col gap-[6px]">
      <h1>Contact</h1>
      <ContactCard name="Bell" description="Yeah" imageUrl="https://avatar.iran.liara.run/public"/>
      <ContactCard name="Bob" description="Yeah" imageUrl="https://avatar.iran.liara.run/public"/>
      <ContactCard name="kevin" description="Yeah" imageUrl="https://avatar.iran.liara.run/public"/>
      <ContactCard name="minion" description="Yeah" imageUrl="https://avatar.iran.liara.run/public"/>
    </div>
  );
}

