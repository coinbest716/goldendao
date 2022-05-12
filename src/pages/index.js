import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import SectionInfo from '@src/components/section_info'
import DaoButton from '@src/components/dao_button'
import NFTCard from '@src/components/nft_card'
import MembershipCardViewer from '@src/components/membership_card_viewer'
import Image from 'next/image'
import Faq from '@src/components/faq'
import AllocationCard from '@src/components/allocation_card'
import DaoIconButton from '@src/components/dao_icon_btn'
import Roadmap from '@src/components/roadmap'
import ImgLink from '@components/img_link'
import Modal from 'react-modal'
import { getCurrentSupply, getMaxSupply } from '@src/utils/helpers'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { postUrl } from '@src/common'
import Signup from '@src/components/signup/signup'
import SignupOnDialog from '@src/components/signup/signup_dialog'

import ImgLogo from '@src/assets/images/logo.png'
import InstagramImg from '@src/assets/social_links/instagram.svg'
import DiscordImg from '@src/assets/social_links/discord.svg'
import TwitterImg from '@src/assets/social_links/twitter.svg'
import TwitterWhiteImg from '@src/assets/social_links/twitter_white.svg'

import RoadmapBackground from '@src/assets/images/roadmap_bg.png'
import MembershipBackground from '@src/assets/images/tiger.png'
import CofounderBackground from '@src/assets/images/cofounder_bg.png'
import FaqBackground from '@src/assets/images/video_bg.png'
import CommunityBackground from '@src/assets/images/community_bg.png'

import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CountDown from '@src/components/countdown'

const CaptionInfo = {
  welcome: {
    caption: 'WELCOME TO Peggy',
    content:
      'A highly engaged, collaborative, and impact-focused community. Our mission is to launch a DAO to collectively advance AAPI solidarity and empowerment through real world events + gatherings, and web3 infrastructure + initiatives.',
  },
  membership: {
    caption: 'MEMBERSHIP',
    content1:
      'Become a member of GoldenDAO and join a core network of individuals contributing to the future of the web3 community across the metaverse and IRL.',
    content2: ' As a founding member, you will have access to:',
    // content3: ' See FAQ tab to learn more on how to become a member.',
  },
  roadmap: {
    caption: 'ROADMAP',
  },
  team: {
    caption1: 'CORE FOUNDERS',
    caption2: 'ARTISTS / ENGINEEERS / COMMUNITY',
    caption3: 'MESSAGE FROM ANDREW',
    caption4: 'Strategic Advisors',
  },
  faq: {
    caption: 'FREQUENTLY ASKED QUESTIONS',
  },
  community: {
    caption1: 'COMMUNITY VALUES',
    caption2: 'JOIN OUR COMMUNITY TODAY',
  },
}

const allocationCard = {
  title: 'NFT Allocation',
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

export default function Index() {
  const [isOpenDlg, setIsOpenDlg] = useState(false)
  const [maxSupply, setMaxSupply] = useState(0)
  const [currentSupply, setCurrentSupply] = useState(0)
  const router = useRouter()
  useEffect(() => {
    const body = document.querySelector('body')
    body.style.overflow = isOpenDlg ? 'hidden' : 'auto'
  }, [isOpenDlg])

  const getNFTInfo = async () => {
    // const max = await getMaxSupply()
    const current = await getCurrentSupply()
    // setMaxSupply(parseInt(max))
    setCurrentSupply(current)
  }

  useEffect(() => {
    getNFTInfo()
  }, [])

  return (
    <>
      <div className="container mx-auto  md:flex justify-end space-x-[10px] xl:pr-[50px] pr-[10px] pt-[120px] hidden">
        <ImgLink img={TwitterImg} width={30} height={30} target="_blank" path="https://twitter.com/Goldendaoxyz" />
        <ImgLink
          className="bg-gradient-to-r from-medium_gold to-darkest_gold rounded-full p-5"
          img={DiscordImg}
          target="_blank"
          path="https://discord.gg/goldendao"
          width={43}
          height={33}
        />
        <ImgLink
          img={InstagramImg}
          width={30}
          height={30}
          path="https://www.instagram.com/goldendao/"
          target="_blank"
        />
      </div>
      <section className="container mx-auto welcome-section center-container md:pt-[20px] pt-[120px]">
        <div className="md:flex md:space-x-[50px]">
          <div className="basis-1/2 flex justify-center flex-col items-center md:items-stretch">
            <div className={`section-info-wrapper mb-[50px]`}>
              <div className="caption-wrapper mb-[28px]">
                <h2 className="caption-left lightest_gold">{CaptionInfo['welcome']['caption']}</h2>
              </div>
              <p>{CaptionInfo['welcome']['content']}</p>
            </div>
            <DaoButton
              className="h-[60px] relative z-[1]"
              width="280px"
              onClick={() => {
                router.push('/nft')
              }}
            >
              MINT YOUR NFT
            </DaoButton>
          </div>

          <div
            className="cursor-pointer basis-1/2 justify-center md:mt-[0px] mt-[20px] opacity-80"
            style={{ zIndex: 1 }}
          >
            <NFTCard
              className="nft-card-shadow z-[1]"
              width={690}
              height={388}
              maxSupply={maxSupply}
              currentSupply={currentSupply}
            ></NFTCard>
          </div>
        </div>
      </section>

      <section id="membership" className="membership-section pt-[110px] relative">
        <div className="background">
          <Image alt="" src={MembershipBackground} layout="fill" objectFit="scale-down" objectPosition="right" />
        </div>

        <div className="container mx-auto">
          <div className="center-container">
            <SectionInfo className="sm:m-0 m-[-10px]" info_title={CaptionInfo['membership']['caption']}>
              <p className="mb-[36px]">{CaptionInfo['membership']['content1']}</p>
              <p>{CaptionInfo['membership']['content2']}</p>
              {/* <p>{CaptionInfo['membership']['content3']}</p> */}
            </SectionInfo>
          </div>
          <MembershipCardViewer className="mx-auto relative" onMintBtnEvent={() => router.push('/nft')} />
        </div>
      </section>
      <section id="roadmap" className="roadmap-section pt-[160px] relative">
        <div className="background">
          <Image alt="" src={RoadmapBackground} layout="fill" />
        </div>
        <div className="center mx-auto relative z-2">
          <SectionInfo className="center-container" info_title={CaptionInfo['roadmap']['caption']}></SectionInfo>
          <Roadmap className="center-container mt-[77px]" />
        </div>
      </section>
      <section id="team" className="team-section mt-[200px] relative">
        <div className="background">
          <Image alt="" src={CofounderBackground} layout="fill" objectFit="scale-down" objectPosition="right" />
        </div>
        <div className="center-container">
          <div className="text-center">
            <Image src={ImgLogo} path={'/'} alt="Golden Dao logo" width={250} height={250} />
          </div>
          <SectionInfo className="mt-[80px] space-y-[20px]" info_title={CaptionInfo['team']['caption1']}>
            <div className="founder-info text-center lg:space-y-[50px] space-y-[20px] pt-[20px]">
              <p>ANDREW YANG</p>
              <p>JACK LIANG</p>
              <p>THEODORE LU</p>
            </div>
          </SectionInfo>
          <SectionInfo className="mt-[170px]" info_title={CaptionInfo['team']['caption2']}>
            <div className="artists-info grid md:grid-cols-1 xl:grid-cols-3 pt-[20px] lg:gap-[50px] gap-[20px]">
              <p className="text-center">Shane Fan</p>
              <p className="text-center">Eugene Lee</p>
              <p className="text-center">Ami Yoshimura</p>
              <p className="text-center">Sarah Lee</p>
              <p className="text-center">Devin Picciolini</p>
              <p className="text-center">Don Ho</p>
              <p className="text-center">Maxwell Amadeus Coombs</p>
              <p className="text-center">Calista Wu</p>
              <p className="text-center">Apollo NFT Studios</p>
              <p className="text-center">IRENE ZHAO</p>
              <p className="text-center">Benjamin Tang</p>
            </div>
          </SectionInfo>
          <SectionInfo className="mt-[170px]" info_title={CaptionInfo['team']['caption4']}>
            <div className="artists-info grid md:grid-cols-1 xl:grid-cols-3 pt-[20px] lg:gap-[50px] gap-[20px]">
              <p className="text-center">Jaeson Ma</p>
              <p className="text-center">William Tong</p>
              <p className="text-center">Andrew Wang</p>
              <p className="text-center">Justin Kan</p>
              <p className="text-center">Li Jiang</p>
              <p className="text-center">Zi Wang</p>
              <p className="text-center">Eric Siu</p>
              <p className="text-center">Matt Liu</p>
              <p className="text-center">Clara Tsao</p>
              <p className="text-center">Michelle Phan</p>
              <p className="text-center">Calista Wu</p>
            </div>
          </SectionInfo>
        </div>
      </section>
      <section className="message-section mt-[170px] relative">
        <div className="center-container">
          <SectionInfo className="mt-[170px]" info_title={CaptionInfo['team']['caption3']}>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p> */}
          </SectionInfo>

          <div className="w-full mt-[60px] relative z-[1]">
            {/* <iframe
              className="mx-auto"
              width="100%"
              height="450"
              src="https://www.youtube.com/embed/cTsEzmFamZ8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe> */}
            <video width="100%" controls>
              <source src="andrew-yang-golden-dao.mov#t=0.001" type="video/mp4" />
              <source src="andrew-yang-golden-dao.mov#t=0.001" type="video/ogg" />
              <img src="thumbnail.png" />
              Your browser does not support HTML video.
            </video>
          </div>
        </div>
      </section>
      <section id="faq" className="faq-section pt-[170px] relative">
        <div className="background">
          <Image alt="" src={FaqBackground} layout="fill" objectFit="scale-down" objectPosition="left" />
        </div>
        <div className="center-container">
          <SectionInfo info_title={CaptionInfo['faq']['caption']}></SectionInfo>
          <Faq className="pt-[40px] pr-[20px]" />
          <AllocationCard title={allocationCard.title} className="mt-[100px] relative">
            <div>
              ● Public Sale:
              <div className="ml-[16px]">
                <p>○ General Public mint</p>
                <p>
                  <b>○ Mint total: </b>888
                </p>
                <p>
                  <b>○ Priced: </b>Last Price Dutch Auction, .88 - 1.28 ETH
                </p>
                <p>
                  <b>○ Sale Date: </b>Week of 3/28/22
                </p>
              </div>
            </div>
            <br />
            <div>
              ● Presale:
              <div className="ml-[16px]">
                <p>
                  ○ Saved for individuals who show commitment (via social media, discord engagement, or other methods)
                  to GoldenDAO initiatives, mission
                </p>
                <p>
                  <b>○ Mint total: </b>888
                </p>
                <p>
                  <b>○ Priced: </b>0.80 ETH
                </p>
                <p>
                  <b>○ Sale Date: </b>Week of 3/28/22
                </p>
              </div>
            </div>
            <br />
            <div>
              ● Reserves:
              <div className="ml-[16px]">
                <p>
                  ○ Reserved for individuals, partners who show long-term commitment to GoldenDAO initiatives, mission
                  (i.e. social and community engagement, appearance, performance, MC at GoldenDAO in-person event, etc.)
                </p>
                <p>
                  <b>○ Mint total: </b>112
                </p>
              </div>
            </div>
          </AllocationCard>
        </div>
      </section>
      <section id="community" className="community-section pt-[95px] relative">
        <div className="background">
          <Image alt="" src={CommunityBackground} layout="fill" />
        </div>
        <div className="center-container relative">
          <SectionInfo info_title={CaptionInfo['community']['caption1']} className="text-center">
            <p>GoldenDAO community values are hinged upon supporting the Asian community through but not limited to:</p>
            <div className="dao-font-bold text-white space-y-[45px] mt-[65px]">
              <p>Combating social injustice</p>
              <p>Civic and community outreach</p>
              <p>Demystifying Asian mental health stigma</p>
              <p>Closing the gap on economic disparities</p>
              <p>
                Lifting up Asian culture, artistry, creatives in addition to promoting executive and thought leadership
              </p>
              <p>Allyship and advocacy</p>
              <p className="pt-[45px]">
                See &nbsp;
                <a
                  href="https://goldendao.notion.site/goldendao/GoldenDAO-AAPI-Solidarity-Empowerment-EXTERNAL-e6e11a8cac0949e5a13aab8ca57e25e3"
                  className="underline"
                >
                  here
                </a>
                &nbsp; for our overview.
              </p>
            </div>
          </SectionInfo>
          <SectionInfo className="mt-[180px]" info_title={CaptionInfo['community']['caption2']} />
          <div className="flex justify-center pt-[20px]">
            <DaoIconButton
              width="580px"
              className="h-[60px]"
              onClick={e => window.open('https://discord.gg/goldendao', '_blank')}
            >
              <Image className="mt-[5px]" src={DiscordImg} alt="Golden Dao logo" width={25} height={25} />
              <span className="mt-[15px] ml-[8px] text-[19px]">JOIN DISCORD</span>
            </DaoIconButton>
          </div>
          <div className="flex justify-center mt-[50px]">
            <MailchimpSubscribe
              url={postUrl}
              render={({ subscribe, status, message }) => (
                <Signup
                  status={status}
                  message={message}
                  onValidated={formdata => {
                    subscribe(formdata)
                  }}
                />
              )}
            />
          </div>
        </div>
      </section>

      <Modal
        isOpen={isOpenDlg}
        style={customStyles}
        ariaHideApp={false}
        onRequestClose={() => setIsOpenDlg(false)}
        shouldCloseOnOverlayClick={true}
      >
        <div className="modal-wrapper grid md:grid-cols-2 grid-cols-1 2xl:w-[1240px] lg:w-[1000px] md:w-[800px] w-[400px] h-[auto] max-h-screen">
          <div className="bg-white 2xl:p-[40px] p-[20px] md:h-[100%] h-[auto]">
            <h4 className="modal-title 2xl:text-[24px] lg:text-[18px]">Minting Opens March, 31, 2022 at 10am PST</h4>
            <p className="2xl:text-[18px] md:text-[15px] text-[14px]">
              Join our immersive community and be a part of the core founding members by purchasing an NFT key. We look
              forward to seeing you in person for our launch party with special guests, celebrity appearances, and our
              host, Andrew Yang in LA on March 31st during NFT week, held exclusively for members and partners.
            </p>
            <CountDown />
            <DaoIconButton
              className="2xl:w-[310px] md:w-[310px] 2xl:h-[60px] sm:h-[40px] h-[40px]"
              onClick={() => window.open('https://discord.gg/goldendao')}
            >
              <Image className="mt-[5px]" src={DiscordImg} alt="Golden Dao logo" width={25} height={25} />
              <span className="2xl:mt-[15px] mt-[6px] 2xl:ml-[8px] lg:ml-[4px] text-[19px]">JOIN DISCORD</span>
            </DaoIconButton>

            <DaoIconButton
              className="2xl:w-[370px] md:w-[340px] lg:mt-[20px] mt-[10px] 2xl:h-[60px] sm:h-[40px] h-[40px]"
              onClick={() => window.open('https://twitter.com/Goldendaoxyz')}
            >
              <Image className="mt-[5px]" src={TwitterWhiteImg} alt="Golden Dao logo" width={25} height={25} />
              <span className="2xl:mt-[15px] mt-[6px] 2xl:ml-[8px] lg:ml-[4px] text-[19px]">FOLLOW ON TWITTER</span>
            </DaoIconButton>
            <div className="flex 2xl:mt-[20px] lg:mt-[20px] mt-[10px]">
              <MailchimpSubscribe
                url={postUrl}
                render={({ subscribe, status, message }) => (
                  <SignupOnDialog
                    status={status}
                    message={message}
                    onValidated={formdata => {
                      subscribe(formdata)
                    }}
                  />
                )}
              />
            </div>
          </div>
          <div className="bg-dao_dlg_color flex items-center justify-center md:h-[100%] h-[400px]">
            <FontAwesomeIcon
              icon={faClose}
              className="p-[16px] absolute top-[6px] right-[12px] md:text-white cursor-pointer text-black z-10"
              size="2x"
              onClick={() => setIsOpenDlg(false)}
            />
            <div className="lg:p-[50px] p-[24px] w-full h-full flex justify-center items-center">
              <div className="w-full h-auto relative">
                <Image alt="" path={'/'} src={ImgLogo} layout="responsive" objectFit="cover" />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}
