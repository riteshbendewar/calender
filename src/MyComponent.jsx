/* eslint-disable react/prop-types */
import * as React from "react";
import calendar from './assets/Calendar.png'
 import profile from './assets/Profile photo.png'
 import object from './assets/object.png'
 import vector from './assets/Vector 8.png'
 import logout from './assets/Logout.png'


 function SidebarItem({ iconSrc, label }) {
    return (
      <div className="flex gap-4 ml-4 max-md:ml-2.5">
        <img src={iconSrc} alt="" className="shrink-0 w-5 aspect-square" />
        <div className="my-auto text-base font-semibold text-slate-950">
          {label}
        </div>
      </div>
    );
  }

  function Profile({ imgSrc, name, email }) {
    return (
      <div className="flex gap-4 self-center mt-5">
        <div className="flex flex-col items-center">
          <img
            src={imgSrc}
            alt=""
            className="aspect-square w-[34px]"
          />
        </div>
        <div className="flex flex-col self-start text-xs text-slate-950">
          <div>{name}</div>
          <div className="mt-2 text-gray-200 text-xs">{email}</div>
        </div>
      </div>
    );
  }
  
function Calendar() {
  return (
    <>
      <div className="flex gap-4    items-center mt-3 text-center whitespace-nowrap">
        <div className="grow self-stretch my-auto">29</div>
        <div className="self-stretch my-auto">30</div>
        <div className="self-stretch my-auto">1</div>
        <div className="self-stretch my-auto">2</div>
        <div style={{backgroundColor:'#605BFF'}} className="h-5 w-5  justify-center align-items-center flex rounded-full">
        <div className="  my-auto">3</div>
        </div>
        <div className="self-stretch my-auto">4</div>
        <div className="self-stretch my-auto">5</div>
      </div>
      <div className="flex gap-5 mt-3 text-center whitespace-nowrap">
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
      </div>
      <div className="flex gap-4 px-px mt-5 text-center whitespace-nowrap">
        <div>13</div>
        <div>14</div>
        <div>15</div>
        <div>16</div>
        <div>17</div>
        <div>18</div>
        <div>19</div>
      </div>
      <div className="flex gap-4 px-px mt-5 text-center whitespace-nowrap">
        <div className="grow">20</div>
        <div>21</div>
        <div>22</div>
        <div>23</div>
        <div>24</div>
        <div>25</div>
        <div>26</div>
      </div>
      <div className="flex gap-4 mt-5 text-center whitespace-nowrap">
        <div className="grow">27</div>
        <div>28</div>
        <div>29</div>
        <div>30</div>
        <div>31</div>
        <div>1</div>
        <div>2</div>
      </div>
    </>
  );
}

function MyComponent() {
  return (
    <div style={{backgroundColor:"white"}} className="pt-10 pr-10  max-md:pr-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <nav className="flex flex-col w-[15%] max-md:ml-0 max-md:w-full ">
        <div className="absolute top-[1150px] left-[25px] w-[167px] h-[43px] text-xs text-black1">
              <div className="absolute top-[0px] left-[0px] w-[45px] h-[43px]">
                <div className="absolute top-[0px] left-[0px] rounded-xl  w-[45px] h-[43px]" />
                <div className="absolute top-[0px] left-[0px] rounded-xl bg-pink w-[45px] h-[43px]" />
                <img
                  className="absolute top-[0px] left-[0px] rounded-xl w-[45px] h-[43px] object-cover"
                  alt=""
                  src={profile}
                />
              </div>
              <div className="absolute top-[6px] left-[55px] w-[67px] h-[31px]">
                <div className="absolute top-[0px] left-[0px] font-semibold">
                  Easin Arafat
                </div>
                <div className="absolute top-[17px] left-[0px] text-3xs opacity-[0.5]">
                  Free Account
                </div>
                
              </div>
              <section>  
      <img
        loading="lazy"
        src={logout}
        alt=""
        className="w-full absolute left-[130px] top-4 opacity-[0.7px] fill-slate-300  aspect-[1.06]  max-w-[17px]"
      />
    </section>
            </div>
           

        <div className="absolute top-[920px] left-[40px] w-[168px] h-[195px] text-xs text-white1">
            <img
              className="absolute top-[0px] left-[9px] w-[150px] h-[150px] object-cover"
              alt=""
              src={object}
            />
            <div className="absolute top-[34px] left-[0px] rounded-xl bg-cornflowerblue w-[168px] h-[161px] opacity-[0.1]"/>
            <div className="absolute top-[0px] left-[9px] bg-dodgerblue w-[150px] h-[150px] mix-blend-color" />
            <div className="absolute top-[147px] left-[15px] rounded-3xs bg-primary w-[138px] h-[33px]" />
            <div className="absolute top-[155px] left-[45px] font-semibold">
              Upgrade Now
            </div>
            <img
              className="absolute top-[112px] left-[20px] w-[127px] h-[43px]"
              alt=""
              src={vector}
            />
          </div>   
            <div className="absolute top-[310px] left-[10px] w-[99px] h-6">
              <div className="absolute top-[200px] left-[10px] font-semibold opacity-[0.7]">
              <SidebarItem iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/5533cd8342c994ee9f4d02443e807fc9726fd373ed695679ab7224cc24750059?apiKey=9e27cf7fce2f418b8eac61c62a170377&" label="Settings" />

              </div>
            
            </div>
            <div className="absolute top-[280px] left-[10px] w-[123px] h-6">
              <div className="absolute top-[180px] left-[10px] font-semibold opacity-[0.7]">
              <SidebarItem iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/42e1ba01b1d9a66dc996513995dedee2487bce09620f55975ef10ae364c25605?apiKey=9e27cf7fce2f418b8eac61c62a170377&" label="Notification" />

              </div>
              
            </div>
            <div className="absolute top-[250px] left-[10px] w-[165px] h-6">
              <div className="absolute top-[160px] left-[10px] font-semibold opacity-[0.7]">
              <SidebarItem iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/bdfe5a2069429c94a2ef75f970213fd4df7421eaecd087cf5c3be1307ef39750?apiKey=9e27cf7fce2f418b8eac61c62a170377&" label="Messages" />

              </div>
              <div className="absolute top-[164px] left-[155px] rounded-6xs bg-red w-[22px] h-3.5 opacity-[0.1]" />
              <div className="absolute top-[165px] left-[160px] text-3xs font-semibold text-red">
                49
              </div>
             
            </div>
            <div className="absolute top-[220px] left-[8px] w-[131px] h-12 text-primary">
              <div className="absolute top-[140px] left-[10px] rounded-tl-none rounded-tr-8xs rounded-br-8xs rounded-bl-none [background:linear-gradient(90deg,_#aca9ff,_rgba(172,_169,_255,_0))] w-[53px] h-12 opacity-[0.2]" />
              <div className="absolute top-[140px] left-[10px] opacity-[0.7] font-semibold">
              <SidebarItem iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/431df52481bf01703afa2aa7d7cfd11b6182aad52a3b50d036e8be8213c5ffc7?apiKey=9e27cf7fce2f418b8eac61c62a170377&" label="Calendar" />

              </div>
              <img
                className="absolute h-[41.67%] w-[13.74%] top-[140px] right-[62.6%] bottom-[29.17%] left-[23.66%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src={calendar}
              />
            </div>
            <div className="absolute top-[190px] left-[10px] w-[106px] h-6">
              <div className="absolute top-[120px] left-[10px] font-semibold opacity-[0.7]">
              <SidebarItem iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/76ab0477a3dc21976f1e70125b8760c6b01b1561f4c58bb22e3a8dcffd097704?apiKey=9e27cf7fce2f418b8eac61c62a170377&" label="Schedule" />

              </div>
              
            </div>
            <div className="absolute top-[160px] left-[10px] w-[89px] h-6">
              <div className="absolute top-[100px] left-[10px] font-semibold opacity-[0.7]">
              <SidebarItem iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/0053da4a1e1b14913b4464c2539fc20ee7e80dd15390745b5c8d4629920d9643?apiKey=9e27cf7fce2f418b8eac61c62a170377&" label="Invoice" />

              </div>
              
            </div>
            <div className="absolute top-[130px] left-[10px] w-[103px] h-[22px]">
              <div className="absolute top-[80px] left-[10px]  opacity-[0.7]">
              <SidebarItem iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/658991f8aa82216d441a31e29d448f0fa40bd018baee0bbd1237e187d95ac840?apiKey=9e27cf7fce2f418b8eac61c62a170377&" label="Analytics" />

              </div>
               
            </div>
            <div className="absolute top-[100px] left-[10px] w-[116px] h-[22px]">
              <div className="absolute top-[60px] left-[10px]    opacity-[0.7]">
              <SidebarItem iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/5a1b4736d8632c3b8902ebfed43bd2483f66a68c25735d36599f7afb81c908a4?apiKey=9e27cf7fce2f418b8eac61c62a170377&" label="Dashboard" />

              </div>
              
            </div>
            <div className="absolute mt-5 flex gap-4 ml-4 max-md:ml-2.5   ">
            <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2158e5f110b99ca54e8f044746a79811c92934560ba37777d1e109911279a021?apiKey=9e27cf7fce2f418b8eac61c62a170377&"
                  alt=""
                  className="object-cover aspect-square w-[42px]"
                />
             
             <div className="my-auto text-4xl font-semibold text-slate-950">
                  Base
                </div>
          </div>
          
        </nav>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}


        <main className="flex flex-col   bg-neutral-50 ml-5 w-[85%] max-md:ml-0 max-md:w-full">
          <section className="flex     flex-col max-md:mt-10 max-md:max-w-full">
          <div className="absolute   top-[55px] left-[300px] w-[20px] h-10">
          <b className="absolute top-[5px]    left-[0px] text-5xl">calender </b>
          <div className="absolute    top-[0px] left-[890px] w-[81px] h-10">
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-primary w-[81px] h-10 opacity-[0.1]" />
            <div className="absolute top-[11px] left-[20px] w-[41.1px] h-[19px]">
              <div className="absolute top-[0px] left-[0px] font-semibold inline-block w-[41.1px] opacity-[0.7]">
                Week
              </div>
            </div>
          </div>
          <div className="absolute top-[0px] left-[803px] w-[67px] h-10">
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-primary w-[67px] h-10 opacity-[0.1]" />
            <div className="absolute top-[11px] left-[20px] w-[26px] h-[19px]">
              <div className="absolute top-[0px] left-[0px] font-semibold inline-block w-[26px] opacity-[0.7]">
                Day
              </div>
            </div>
          </div>
          <div className="absolute top-[0px] left-[1093px] w-[69px] h-10 text-white">
            <div className="absolute top-[0px] left-[0px] w-[69px] h-10">
              <div className="absolute top-[0px] left-[0px] rounded-3xs bg-primary w-[69px] h-10" />
              <div className="absolute top-[11px] left-[20px] w-7 h-[19px]">
                <div className="absolute top-[0px] left-[0px] font-semibold">
                  Year
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[0px] left-[991px] w-[82px] h-10">
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-primary w-[82px] h-10 opacity-[0.1]" />
            <div className="absolute top-[11px] left-[20px] w-[42px] h-[19px]">
              <div className="absolute top-[0px] left-[0px] font-semibold opacity-[0.7]">
                Month
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------ */}
            <section className="mt-7    max-md:max-w-full">
              <div className="flex bg-neutral-50   max-md:flex-col max-md:gap-0">
                <aside
                  className="flex flex-col bg-neutral-50 w-[20%] max-md:ml-0 max-md:w-full"
                >
                  <div
                    className="flex flex-col bg-neutral-50  py-8 pr-3.5 pl-8 mx-auto w-full  rounded-md max-md:pl-5 max-md:mt-10"
                  >
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec59883680aab4d8a660c10b01c7164ae0c3dccc18d8b12c56e876c0685a0220?apiKey=9e27cf7fce2f418b8eac61c62a170377&"
                      alt=""
                      className="self-center aspect-[4.55] mt-10 ml-3 w-[170px]"
                    />
                    <div
                     style={{backgroundColor:"white"}} className="flex w-[170px] absolute top-[200px] left-[310px]    flex-col px-5 py-6 mt-5 text-xs rounded-lg border border-gray-50 border-solid text-slate-950"
                    >
                      <div  className="flex  justify-between px-0.5 font-semibold">
                        <div>December 2, 2021</div>
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6f536cba1692a65c52c99b1c8546913287cf16ab562269804a02a10357564ba?apiKey=9e27cf7fce2f418b8eac61c62a170377&"
                          alt=""
                          className="shrink-0 self-start  aspect-[3.23] w-[30px]"
                        />
                      </div>
                      <div style={{backgroundColor:"white"}}
                        className="flex  gap-4 justify-between mt-5 font-semibold text-center whitespace-nowrap"
                      >
                        <div>S</div>
                        <div>S</div>
                        <div>M</div>
                        <div>T</div>
                        <div>W</div>
                        <div>T</div>
                        <div>F</div>
                      </div>

                      <div >

                      < Calendar />
                      </div>
                    </div>

                    <div className="absolute top-[109px] left-[233px] w-[170px] h-[772px]">
 
          <div style={{backgroundColor:"white"}} className="absolute  top-[685px] left-[80px] w-[210px] h-[45px] text-primary">
            <div className="absolute top-[0px]  left-[0px] rounded-3xs box-border w-[206px] h-[45px] opacity-[0.1] border-[1px] border-solid border-primary" />
            <div className="absolute top-[14px] left-[61px] font-semibold">
              My Schedule
            </div>
          </div>
          <div style={{backgroundColor:"white"}} className="absolute  top-[365px] left-[80px] w-[206px] h-80 text-3xs">
           
            <div style={{backgroundColor:"white"}} className="absolute top-[210px] left-[10px] w-[170px] h-9">
              
              
              <Profile
                      imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/377d769d25410f925b2c4e6eea6cf29a110b11d110e71b16bfdb1a8e8f52dfe0?apiKey=9e27cf7fce2f418b8eac61c62a170377&"
                      name="Eddie Lobanovskiy"
                      email="laboanovskiy@gmail.com"
                    />
            </div>
            
            <div className="absolute top-[159px] left-[10px] w-[142px] h-[34px]">
             
              
              <Profile
                      imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/54cdd940669c093b821c72612a3a8671728a1c965fe7fd5951f555936001f28b?apiKey=9e27cf7fce2f418b8eac61c62a170377&"
                      name="Alexey Stave"
                      email="alexeyst@gmail.com"
                    />
            </div>
           
            <div className="absolute top-[100px] left-[10px] w-[163px] h-[34px]">
              <div className="absolute top-[19px] left-[49px] w-[114px] h-3.5">
                
              </div>
              <Profile
                      imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/377d769d25410f925b2c4e6eea6cf29a110b11d110e71b16bfdb1a8e8f52dfe0?apiKey=9e27cf7fce2f418b8eac61c62a170377&"
                      name="Eddie Lobanovskiy"
                      email="laboanovskiy@gmail.com"
                    />
            </div>
         
            <div style={{backgroundColor:"#FAFAFB"}} className="absolute top-[40px] rounded-2xl  left-[10px] w-[180px] h-[45px] text-xs">
              <div className="absolute top-[0px] left-[0px] rounded-3xs   w-[206px] h-[45px]" />
              <div className="absolute top-[15px] left-[41px] opacity-[0.7]">
                Search for People
              </div>
            </div>
            <div className="absolute top-[10px] left-[10px] w-[51px] h-[22px] text-base">
              <div className="absolute top-[0px] left-[0px] font-semibold">
                People
              </div>
    </div>
    </div>
    </div>
    </div>
                </aside>
                <section
                  className="flex relative  top-[50px] left-[30px] flex-col ml-14 w-[95%] max-md:ml-0 max-md:w-full"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/06318b853520e679c6931ed811cbd81d68cce5b45e7811aaeb37715c8ecd4015?apiKey=9e27cf7fce2f418b8eac61c62a170377&"
                    alt=""  
                    className="grow   w-full aspect-[0.84] max-md:mt-10 max-md:max-w-full"
                  />
                </section>
              </div>
            </section>
          </section>
        </main>
      </div>
    </div>
  );
}

export default MyComponent;