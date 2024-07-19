import * as React from "react";

 export default function MyComponent2() {
  return (
    <div className="flex flex-col py-8 pr-3.5 pl-8 bg-white rounded-md max-w-[250px]">
      <div className="flex gap-3 px-9 py-4 text-sm font-semibold text-white bg-indigo-500 rounded-xl">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bcbb84f8dcc72086d1ce087115775461a5ec43553acac3b60a34284fefd99349?"
          className="shrink-0 w-3.5 aspect-square"
        />
        <div className="flex-auto">Create Schedule</div>
      </div>
      <div className="flex flex-col px-5 py-6 mt-5 text-xs rounded-lg border border-gray-50 border-solid text-slate-950">
        <div className="flex gap-5 justify-between px-0.5 font-semibold">
          <div>December 2, 2021</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6f536cba1692a65c52c99b1c8546913287cf16ab562269804a02a10357564ba?"
            className="shrink-0 self-start aspect-[3.23] w-[26px]"
          />
        </div>
        <div className="flex gap-4 justify-between mt-5 font-semibold text-center whitespace-nowrap">
          <div>S</div>
          <div>S</div>
          <div>M</div>
          <div>T</div>
          <div>W</div>
          <div>T</div>
          <div>F</div>
        </div>
        <div className="flex gap-3 items-center mt-3 text-center whitespace-nowrap">
          <div className="grow self-stretch my-auto">29</div>
          <div className="self-stretch my-auto">30</div>
          <div className="self-stretch my-auto">1</div>
          <div className="self-stretch my-auto">2</div>
          <div className="flex overflow-hidden relative flex-col justify-center self-stretch px-2.5 py-2 text-white aspect-square">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/07ba21ef7445d94b141ecdb44dc5fc1e1de99227f67e7a5902f7ca375a022c57?"
              className="object-cover absolute inset-0 size-full"
            />
            3
          </div>
          <div className="self-stretch my-auto">4</div>
          <div className="self-stretch my-auto">5</div>
        </div>
        <div className="flex gap-3.5 mt-3 text-center whitespace-nowrap">
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>10</div>
          <div>11</div>
          <div>12</div>
        </div>
        <div className="flex gap-3.5 px-px mt-5 text-center whitespace-nowrap">
          <div>13</div>
          <div>14</div>
          <div>15</div>
          <div>16</div>
          <div>17</div>
          <div>18</div>
          <div>19</div>
        </div>
        <div className="flex gap-3.5 px-px mt-5 text-center whitespace-nowrap">
          <div className="grow">20</div>
          <div>21</div>
          <div>22</div>
          <div>23</div>
          <div>24</div>
          <div>25</div>
          <div>26</div>
        </div>
        <div className="flex gap-3.5 mt-5 text-center whitespace-nowrap">
          <div className="grow">27</div>
          <div>28</div>
          <div>29</div>
          <div>30</div>
          <div>31</div>
          <div>1</div>
          <div>2</div>
        </div>
      </div>
      <div className="mt-9 text-base font-semibold text-slate-950">People</div>
      <div className="justify-center items-start px-10 py-4 mt-5 text-xs bg-gray-50 rounded-xl text-slate-950">
        Search for People
      </div>
      <div className="flex gap-4 self-center mt-5">
        <div className="flex flex-col items-center">
          <img
            loading="lazy"
            srcSet="..."
            className="aspect-square w-[34px]"
          />
          <img
            loading="lazy"
            srcSet="..."
            className="mt-5 aspect-square w-[34px]"
          />
          <img
            loading="lazy"
            srcSet="..."
            className="mt-4 aspect-square w-[34px]"
          />
        </div>
        <div className="flex flex-col self-start text-xs text-slate-950">
          <div>Eddie Lobanovskiy</div>
          <div className="mt-2 text-xs">laboanovskiy@gmail.com</div>
          <div className="mt-7">Alexey Stave</div>
          <div className="mt-2 text-xs">alexeyst@gmail.com</div>
          <div className="mt-6">Anton Tkacheve</div>
          <div className="mt-2.5 text-xs">tkacheveanton@gmail.com</div>
        </div>
      </div>
      <div className="justify-center items-start px-16 py-4 mt-28 text-sm font-semibold text-indigo-500 rounded-xl border border-indigo-500 border-solid">
        My Schedule
      </div>
    </div>
  );
}

