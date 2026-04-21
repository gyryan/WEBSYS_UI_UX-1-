import clsx from "clsx";
import svgPaths from "./svg-1q1icqekge";
import imgEllipse10 from "../assets/9cbd2fad755b2981689246d30e2319d9e5d6377d.png";

function Icon({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}
type ParagraphTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ParagraphText({ text, additionalClassNames = "" }: ParagraphTextProps) {
  return (
    <div className={clsx("absolute content-stretch flex h-[20px] items-start", additionalClassNames)}>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#4a5565] text-[14px] text-center">{text}</p>
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-white relative size-full" data-name="Desktop">
      <div className="absolute left-[68px] size-[237px] top-[101px]">
        <img alt="" className="absolute block max-w-none size-full" height="237" src={imgEllipse10} width="237" />
      </div>
      <div className="absolute bg-[#d9d9d9] bottom-[-5px] right-[-7px] top-[-9px] w-[1335px]" />
      <div className="absolute bg-[blue] bottom-0 h-[1381px] left-0 w-[399px]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Julius_Sans_One:Regular',sans-serif] h-[64px] justify-center leading-[1.4] left-[92px] not-italic text-[#cd0001] text-[28px] top-[354px] w-[348px]">
        <p className="mb-0">&nbsp;</p>
        <p>qcus-portal</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Alike_Angular:Regular',sans-serif] h-[64px] justify-center leading-[0] left-[51px] not-italic text-[36px] text-white top-[687px] w-[348px]">
        <p className="leading-[1.4]">Dashboard</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Alike_Angular:Regular',sans-serif] h-[64px] justify-center leading-[0] left-[51px] not-italic text-[36px] text-white top-[787px] w-[348px]">
        <p className="leading-[1.4]">Events</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Alike_Angular:Regular',sans-serif] h-[64px] justify-center leading-[0] left-[51px] not-italic text-[36px] text-white top-[880px] w-[348px]">
        <p className="leading-[1.4]">{`Registration Form `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Alike_Angular:Regular',sans-serif] justify-center leading-[0] left-[51px] not-italic text-[36px] text-white top-[973px] whitespace-nowrap">
        <p className="leading-[1.4] whitespace-pre">{`Grades  `}</p>
      </div>
      <button className="-translate-y-1/2 absolute cursor-pointer flex flex-col font-['Alike_Angular:Regular',sans-serif] h-[64px] justify-center leading-[0] left-[51px] not-italic text-[36px] text-left text-white top-[1066px] w-[348px]">
        <p className="leading-[1.4]">Request Document</p>
      </button>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Alike_Angular:Regular',sans-serif] h-[64px] justify-center leading-[0] left-[51px] not-italic text-[36px] text-white top-[1166px] w-[348px]">
        <p className="leading-[1.4]">Transactions</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Alike_Angular:Regular',sans-serif] h-[64px] justify-center leading-[0] left-[51px] not-italic text-[36px] text-white top-[1266px] w-[348px]">
        <p className="leading-[1.4]">Account</p>
      </div>
      <div className="absolute h-[1664px] right-[18px] top-[34px] w-[1285px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1285 1664">
          <path d={svgPaths.p342cf0} fill="var(--fill-0, white)" id="Rectangle 38" />
        </svg>
      </div>
      <div className="absolute h-[81px] right-[33px] top-[60px] w-[459px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 459 81">
          <path d={svgPaths.p2dc71080} fill="var(--fill-0, #D9D9D9)" id="Rectangle 40" />
        </svg>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Alike_Angular:Regular',sans-serif] h-[65px] justify-center leading-[1.4] not-italic right-[162px] text-[0px] text-black text-right top-[100.5px] w-[355px]">
        <p className="mb-0 text-[32px]">Neil Longbian</p>
        <p className="font-['Amiko:Regular',sans-serif] text-[24px]">neillongbian@gmail.com</p>
      </div>
      <div className="absolute bg-[#d9d9d9] h-[105px] left-[507px] rounded-[24px] top-[403px] w-[560px]" />
      <div className="absolute bg-[#d9d9d9] h-[105px] left-[761px] rounded-[24px] top-[933px] w-[560px]" />
      <div className="absolute bg-[#d9d9d9] h-[278px] left-[507px] rounded-[24px] top-[634px] w-[1154px]" />
      <div className="absolute right-[50px] size-[70px] top-[68px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 70">
          <circle cx="35" cy="35" fill="var(--fill-0, white)" id="Ellipse 11" r="35" />
        </svg>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Alike_Angular:Regular',sans-serif] h-[59px] justify-center leading-[0] left-[820px] not-italic text-[48px] text-black top-[292.5px] w-[596px]">
        <p className="leading-[1.4]">REQUEST DOCUMENTS</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Alike_Angular:Regular','Noto_Sans:Regular',sans-serif] h-[59px] justify-center leading-[0] left-[553px] text-[36px] text-black top-[455.5px] w-[534px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        <p className="leading-[1.4]">Type of Document ▽</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Alike_Angular:Regular',sans-serif] h-[59px] justify-center leading-[0] left-[807px] not-italic text-[36px] text-black top-[985.5px] w-[534px]">
        <p className="leading-[1.4]">Check Transaction</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Alike_Angular:Regular',sans-serif] h-[59px] justify-center leading-[0] left-[507px] not-italic text-[36px] text-black top-[588.5px] w-[534px]">
        <p className="leading-[1.4]">{`Reason : `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Alike_Angular:Regular',sans-serif] h-[59px] justify-center leading-[0] left-[526px] not-italic text-[36px] text-black top-[1053.5px] w-[534px]">
        <p className="leading-[1.4]">{`Contact : `}</p>
      </div>
      <div className="absolute h-[164px] left-[527px] top-[1145px] w-[896px]" data-name="Container">
        <div className="absolute bg-white bottom-[-130px] left-0 rounded-[10px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] top-0 w-[340px]" data-name="Container">
          <div className="absolute bg-[#c8973a] content-stretch flex items-center justify-center left-[143.33px] px-[12px] rounded-[33554400px] size-[48px] top-[45px]" data-name="Container">
            <Icon>
              <path d={svgPaths.p331096c0} fill="var(--fill-0, white)" id="Vector" />
            </Icon>
          </div>
          <div className="absolute h-[24px] left-[24px] top-[93px] w-[234.656px]" data-name="Heading 4" />
          <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-1/2 not-italic text-[#0a0a0a] text-[16px] text-center top-[105px] whitespace-nowrap">Phone</p>
          <ParagraphText text="+63 123 456 7890" additionalClassNames="left-[50px] right-[55.34px] top-[141px]" />
        </div>
        <div className="absolute bg-white bottom-[-130px] right-[167px] rounded-[10px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] top-0 w-[349px]" data-name="Container">
          <div className="absolute bg-[#1b3ebf] content-stretch flex items-center justify-center left-[151.33px] px-[12px] rounded-[33554400px] size-[48px] top-[45px]" data-name="Container">
            <Icon>
              <path d={svgPaths.p1ab0f3c0} fill="var(--fill-0, white)" id="Vector" />
              <path d={svgPaths.p50f82f0} fill="var(--fill-0, white)" id="Vector_2" />
            </Icon>
          </div>
          <div className="absolute h-[24px] left-[58px] right-[56.33px] top-[109px]" data-name="Heading 4">
            <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-[117.39px] not-italic text-[#0a0a0a] text-[16px] text-center top-[-2px] whitespace-nowrap">Email</p>
          </div>
          <ParagraphText text="info@qcu.edu.ph" additionalClassNames="left-[58px] right-[56.33px] top-[141px]" />
        </div>
        <div className="absolute bg-white bottom-[-130px] right-[-213px] rounded-[10px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] top-0 w-[350px]" data-name="Container">
          <div className="absolute bg-[#cc1e1e] content-stretch flex items-center justify-center left-[151.33px] px-[12px] rounded-[33554400px] size-[48px] top-[47px]" data-name="Container">
            <Icon>
              <path clipRule="evenodd" d={svgPaths.p100498c0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
            </Icon>
          </div>
          <div className="absolute h-[24px] left-[58px] right-[57.34px] top-[111px]" data-name="Heading 4">
            <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-[117.08px] not-italic text-[#0a0a0a] text-[16px] text-center top-[-2px] whitespace-nowrap">Location</p>
          </div>
          <ParagraphText text="Quezon City, Philippines" additionalClassNames="left-[58px] right-[57.34px] top-[143px]" />
        </div>
      </div>
      <div className="absolute h-0 left-[1131px] top-[986px] w-[125px]">
        <div className="absolute inset-[-7.36px_-0.8%_-7.36px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 126 14.7279">
            <path d={svgPaths.p24f8c400} fill="var(--stroke-0, black)" id="Arrow 1" />
          </svg>
        </div>
      </div>
    </div>
  );
}