export const Footer = () => {
  return (
    <>
      <footer className="text-white bg-[#191919] mt-[100px] p-[50px]">
        <div className="grid grid-cols-[6fr,2fr,2fr] gap-[30px]">
          <div className="box">
            <ul className="mb-[30px] flex">
              <li className="mr-[30px]">Terms of Use</li>
              <li className="mr-[30px]">Privacy-Policy</li>
              <li className="mr-[30px]">Blog</li>
              <li className="mr-[30px]">FAQ</li>
              <li className="mr-[30px]">Watch List</li>
            </ul>
            <span>
              © 2022 STREAMIT. All Rights Reserved. All videos and shows on this
              platform are trademarks of, and all related images and content are
              the property of, Streamit Inc. Duplication and copy of this is
              strictly prohibited. All rights reserved.
            </span>
          </div>
          <div className="">
            <h3>Follow Us</h3>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-github"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-instagram"></i>
          </div>
          <div className="">
            <h3>Streamit App</h3>
            <div className="flex">
              <img src="https://img.icons8.com/color/48/000000/apple-app-store--v3.png" />
              <span>App Store</span>
              <img src="https://img.icons8.com/fluency/48/000000/google-play.png" />
              <span>Play Store</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
