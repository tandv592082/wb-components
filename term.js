const TERMS = {
    vi: {
        title: 'Đồng ý tất cả',
        terms: [
            {
                title: 'Điều 1: Định nghĩa',
                content: [
                    `&ensp1.1 “Ngân hàng” hay “Woori Bank Việt Nam” nghĩa là Ngân hàng trách nhiệm hữu hạn một thành viên Woori Việt Nam bao gồm Trụ sở chính, tất cả các chi nhánh và văn phòng giao dịch trên toàn quốc cung cấp dịch vụ Internet/ Mobile Banking cho khách hàng.`,
                    `&ensp1.2 “Khách hàng” nghĩa là cá nhân, tổ chức/doanh nghiệp đăng ký sử dụng dịch vụ Internet/ Mobile Banking với Ngân hàng.`,
                    `&ensp1.3 “Internet/ Mobile Banking” nghĩa là các dịch vụ do Woori Bank Việt Nam cung cấp bao gồm: dịch vụ cho phép Khách hàng thực hiện giao dịch trực tuyến bằng cách đăng nhập trên trang web hoặc ứng dụng của Woori Bank Việt Nam, dịch vụ cho phép Khách hàng nhận thông tin như biến động số dư tài khoản qua tin nhắn điện thoại/thông báo đẩy và các dịch vụ tiện ích khác do Woori Bank Việt Nam cung cấp theo từng thời kỳ.`,
                    `&ensp1.4 “Internet Banking” nghĩa là dịch vụ ngân hàng trực tuyến trên trang web của Ngân hàng, cho phép Khách hàng sử dụng tên đăng nhập và mật khẩu được cấp bởi Ngân hàng để đăng nhập và thực hiện các giao dịch tài chính đối với các số tài khoản của Khách hàng tại Ngân hàng.`,
                    `&ensp1.5 “Mobile Banking” là dịch vụ ngân hàng trực tuyến trên điện thoại di động, qua đó khách hàng sử dụng điện thoại di động của mình để truy cập ứng dụng Mobile Banking của Woori Bank Việt Nam nhằm thực hiện các giao dịch ngân hàng trực tuyến. Tên đăng nhập và mật khẩu được sử dụng trên Mobile Banking giống như tên được sử dụng trên Internet Banking.`,
                    `&ensp1.6 “SMS Banking” là dịch vụ Ngân hàng gửi các tin nhắn thông báo như thông báo biến động số dư tài khoản đã đăng ký dịch vụ hoặc thông tin cần cho việc thực hiện giao dịch Ngân hàng trực tuyến của Khách hàng như OTP..v..v tới số điện thoại khách hàng đã đăng ký.`,
                    `&ensp1.7 “Mật khẩu đăng nhập” nghĩa là mật khẩu được sử dụng để đăng nhập vào hệ thống Internet/Mobile Banking.`,
                    `&ensp1.8 “Mật khẩu tài khoản” nghĩa là một chuỗi bao gồm 4 chữ số được Khách hàng đăng ký cho các giao dịch của tài khoản.`,
                    `&ensp1.9 “Tên đăng nhập” có nghĩa là một chuỗi các ký tự được Khách hàng đăng ký và được Ngân hàng chấp thuận để Khách hàng sử dụng để đăng nhập vào hệ thống Internet/Mobile Banking của Ngân hàng.`,
                    `&ensp1.10 “Tài khoản” nghĩa là tài khoản của khách hàng tại Woori Bank Việt Nam đã đăng ký sử dụng Internet/ Mobile Banking.`,
                    `&ensp1.11 “Yêu cầu thanh toán” là yêu cầu chuyển tiền của Khách hàng tới người thụ hưởng thông qua hệ thống Internet/Mobile Banking.`,
                    `&ensp1.12 “OTP” nghĩa là mật khẩu một lần gồm 6 chữ số, được sử dụng trong các giao dịch như chuyển khoản qua hệ thống Internet/Mobile Banking.`,
                    `&ensp1.13 “OTP token”(loại thường) là thiết bị tạo mật khẩu một lần sử dụng trong các giao dịch như đăng nhập, chuyển khoản trên hệ thống Internet/Mobile Banking.`,
                    `&ensp1.14 “A-OTP” là OTP token dạng nâng cao trong đó khách hàng phải nhập mã INPUT CODE từ Internet/Mobile Banking vào A-OTP để tạo ra OTP sử dụng cho giao dịch.`,
                    `&ensp1.15 “Thời hạn thanh toán” nghĩa là hạn thời gian trong ngày mà yêu cầu thanh toán có thể được xử lý và chuyển cho người thụ hưởng thành công.`,
                    `&ensp1.16 “M-OTP” nghĩa là giải pháp tạo mật khẩu một lần được cài đặt ngay trong Mobile Banking của Ngân hàng để xác thực các giao dịch tương ứng trên Internet/Mobile Banking.`,
                    `&ensp1.17 “Mã PIN” là số gồm 06 chữ số mà Khách hàng đăng ký trên Mobile Banking khi cài đặt M-OTP, được sử dụng để xác minh giao dịch.`,
                ]
            },
            {
                title: `Điều 2: Phạm vi dịch vụ`,
                content: [
                    `Dịch vụ Internet/Mobile Banking do Woori Bank Việt Nam cung cấp cho Khách hàng bao gồm:`,

                    `&ensp2.1 Tra cứu thông tin: số dư tài khoản, lịch sử giao dịch của tài khoản thanh toán, tài khoản tiền gửi, thẻ tín dụng/thẻ ghi nợ, tài khoản vay; tỷ giá; lãi suất; địa chỉ, số điện thoại của chi nhánh ngân hàng và văn phòng giao dịch và các thông tin khác.`,
                    `&ensp2.2 Chuyển tiền: Chuyển khoản trong và ngoài nước, đổi ngoại tệ.`,
                    `&ensp2.3 Thanh toán: Nạp tiền vào tài khoản di động, thanh toán hóa đơn hộ gia đình, rút tiền ATM bằng điện thoại mà không cần thẻ, thanh toán hàng hóa, dịch vụ bằng mã QR và các dịch vụ khác.`,
                    ` &ensp2.4 Nhận tin nhắn SMS thay đổi số dư.`,
                    ` &ensp2.5 Các dịch vụ khác do Ngân hàng cung cấp theo từng thời kỳ.`,
                ]
            },
            {
                title: `Điều 3: Giờ giao dịch`,
                content: [
                    `3.1 Giờ giao dịch của Internet/ Mobile Banking của Woori Bank Việt Nam là 24/7 (24 giờ mỗi ngày, 7 ngày mỗi tuần) không bao gồm bảo trì hệ thống hoặc các lý do khác nằm ngoài khả năng kiểm soát của Woori Bank Việt Nam.`,
                    `3.2 Thời gian xử lý các yêu cầu chuyển khoản của khách hàng như sau:`,
                    ` &enspa. Yêu cầu chuyển khoản cho người thụ hưởng trong cùng hệ thống Woori Bank Việt Nam hoặc ở ngân hàng khác qua hệ thống chuyển nhanh NAPAS sẽ được xử lý ngay sau khi khách hàng thực hiện giao dịch.`,
                    ` &enspb. Yêu cầu chuyển khoản cho người thụ hưởng ở ngân hàng khác qua hệ thống chuyển khoản thông thường (Citad) thực hiện trước Thời hạn thanh toán sẽ được xử lý trong ngày. Các yêu cầu chuyển khoản thực hiện sau Thời hạn thanh toán sẽ được xử lý vào ngày làm việc tiếp theo.`,
                    ` &enspc. Thời hạn thanh toán áp dụng tại Woori Bank Việt Nam được cập nhật trên trang web chính thức của Woori Bank Việt Nam và ứng dụng Mobile Banking của Ngân hàng.`,
                    `3.3 Thời gian gửi tin nhắn SMS thông báo biến động số dư đến số điện thoại của Khách hàng đã đăng ký dịch vụ SMS Banking: ngay sau khi thay đổi số dư (áp dụng cho các tài khoản đã đăng ký dịch vụ này).`,
                    `3.4 Giờ xử lý trên có thể được điều chỉnh theo từng thời kỳ và sẽ được thông báo trước cho Khách hàng.`,
                ]
            },
            {
                title: 'Điều 4: Hạn mức chuyển tiền',
                content: [
                    `4.1 Hạn mức chuyển tiền bao gồm:`,
                    `&enspa. Hạn mức chuyển khoản một lần: số tiền tối đa mà Khách hàng có thể chuyển với mỗi giao dịch.`,
                    `&enspb. Hạn mức chuyển khoản mỗi ngày: số tiền tối đa mà Khách hàng có thể chuyển mỗi ngày.`,
                    `4.2 Hạn mức chuyển khoản ở trên bao gồm số tiền chuyển giữa các tài khoản của Khách hàng và chuyển cho người thụ hưởng khác trong hoặc ngoài hệ thống Woori Bank Việt Nam.`,
                    `4.3 Hạn mức chuyển khoản được quy định bởi Woori Bank Việt Nam và có thể thay đổi tùy từng thời điểm. Khách hàng có thể yêu cầu tăng hoặc giảm Hạn mức chuyển khoản của mình thông qua hệ thống Internet/Mobile Banking hoặc trực tiếp tại quầy của Woori Bank Việt Nam. Yêu cầu tăng hạn mức chuyển khoản sẽ được áp dụng sau khi ngân hàng phê duyệt.`,
                ]
            },
            {
                title: 'Điều 5: Cài đặt và sử dụng dịch vụ',
                content: [
                    `Khách hàng truy cập vào địa chỉ trang web chính thức của Ngân hàng tại https://www.woori.com.vn hoặc https://www.woori.vn để sử dụng Internet Banking hoặc tải về ứng dụng Mobile Banking của Ngân hàng bằng cách tìm kiếm từ khóa “Woori WON Việt Nam” trên các kho ứng dụng (App store hoặc Google Play)`,
                    `Hệ thống sẽ yêu cầu Khách hàng đổi mật khẩu đăng nhập trong lần truy cập đầu tiên. Khách hàng bắt buộc thực hiện đổi mật khẩu để bắt đầu sử dụng dịch vụ.`,
                    ` Các thông tin hướng dẫn sử dụng đều được hiển thị theo từng màn hình giao dịch. Khách hàng tham khảo nội dung hướng dẫn cụ thể trên website/ứng dụng hoặc tham khảo thêm thông tin tại các chi nhánh, phòng giao dịch, trang fanpage chính thức của Ngân hàng để sử dụng dịch vụ. Ngoài ra có thể liên hệ trực tiếp với Ngân hàng để được hỗ trợ trực tiếp qua Hotline chăm sóc khách hàng 1800-6003.`,
                ]
            },
            {
                title: 'Điều 6: Chính sách bảo mật',
                content: [
                    `6.1 Chính sách bảo mật thông tin`,
                    `&ensp a. Woori Bank Việt Nam ý thức được trách nhiệm đối với Khách hàng và cam kết sử dụng thông tin do Khách hàng cung cấp đúng mục đích. Đồng thời Ngân hàng sẽ cố gắng hết mức có thể để xây dựng, củng cố các quy đinh về bảo mật, lắp đặt các trang thiết bị bảo mật cần thiết cho việc thu thập, sử dụng và quản lý thông tin khách hàng.`,
                    `&ensp b. Woori Bank Việt Nam cam kết không tiết lộ thông tin liên quan đến khách hàng, thông tin giao dịch cho bất kỳ bên thứ ba nào khác, trừ khi:`,
                    `&ensp&ensp- Thông tin đó đã thông báo trước cho Khách hàng và có được sự đồng ý từ Khách hàng về việc tiết lộ;`,
                    `&ensp&ensp- Cung cấp cho các nhân viên chi nhánh và văn phòng giao dịch của Woori Bank Việt Nam và/ hoặc bên thứ ba khi họ cần thông tin đó để thực hiện các yêu cầu của Khách hàng.`,
                    `&ensp&ensp- Theo yêu cầu của các cơ quan nhà nước, Tòa án hoặc các cơ quan có thẩm quyền khác. Tuy nhiên, với điều kiện, Ngân hàng sẽ chỉ cung cấp thông tin trong thẩm quyền của Ngân hàng;`,
                    `&ensp&ensp- Để giải quyết tranh chấp (nếu có) giữa Ngân hàng và Khách hàng.`,
                    `&enspc. Khách hàng cam kết không tiết lộ thông tin của Ngân hàng liên quan đến việc cung cấp dịch vụ Internet/Mobile Banking theo yêu cầu của Khách hàng cho bất kỳ bên thứ ba nào khác trừ khi tiết lộ cho các cơ quan Nhà nước, Tòa án, cơ quan có thẩm quyền hoặc khi có sự đồng ý của Ngân hàng.`,
                    `6.2 Phương tiện bảo mật`,
                    `&enspa. Phương tiện bảo mật bao gồm Tên đăng nhập; các loại Mật khẩu; OTP; OTP Token, A-OTP, M-OTP do Ngân hàng cấp cho Khách hàng.`,
                    `&enspb. Đối với các loại mật khẩu bao gồm “mật khẩu đăng nhập”, “mật khẩu tài khoản” nếu Khách hàng nhập sai quá số lần cho phép giao dịch tài khoản sẽ tự động bị giới hạn nhằm mục đích bảo mật.`,
                    `6.3 Chính sách bảo mật và bản quyền thương hiệu.`,
                    `&enspa. Cả Ngân hàng và Khách hàng sẽ chịu trách nhiệm ngăn chặn các hoạt động gian lận trực tuyến. Ngân hàng luôn nỗ lực để áp dụng các tiêu chuẩn tốt nhất trong bảo vệ quyền lợi của Khách hàng. Ngân hàng khuyến nghị Khách hàng giữ bí mật thông tin mọi lúc, mọi nơi, để tránh cố ý hoặc vô tình chia sẻ hoặc tiết lộ thông tin cho bất kỳ bên thứ ba nào. Tránh chọn thông tin dễ đoán như tên, địa chỉ, số điện thoại, ngày sinh, v.v. khi Khách hàng đăng ký tên đăng nhập và thay đổi Mật khẩu.`,
                    `&enspb. Tất cả các thiết kế, logo, hình ảnh và thông tin được tải lên trên trang web/ ứng dụng của Ngân hàng đều thuộc quyền sở hữu trí tuệ của Woori Bank Việt Nam. Nghiêm cấm mọi hành vi sử dụng, chỉnh sửa, lưu trữ, sao chép, phát tán, chia sẻ bất kỳ phần nào của các tài sản này cho mục đích thương mại hoặc công cộng mà không có sự đồng ý bằng văn bản của Ngân hàng.`,
                    `6.4 Biện pháp đảm bảo an toàn, bảo mật.`,
                    `Để đảm bảo giao dịch an toàn và bảo mật khi sử dụng dịch vụ Internet/Mobile Banking, Khách hàng cần lưu ý các nội dung sau:`,
                    `&ensp- Không sử dụng máy tính công cộng để truy cập, thực hiện giao dịch Internet Banking;`,
                    `&ensp- Không lưu lại tên đăng nhập và mật khẩu trên các trình duyệt web;`,
                    `&ensp- Thoát khỏi ứng dụng Internet/Mobile Banking khi không sử dụng và đóng cửa sổ trình duyệt, khóa hoặc tắt thiết bị cá nhân khi tạm dời thiết bị trong một thời gian dài;`,
                    `&ensp- Thực hiện cài đặt, sử dụng phần mềm diệt vi rút trên thiết bị cá nhân sử dụng để giao dịch Internet Banking;`,
                    `&ensp- Lựa chọn các phương tiện xác thực (OTP Token/AOTP/Mobile OTP…) phù hợp với nhu cầu sử dụng về hạn mức giao dịch;`,
                    `&ensp- Không thể sử dụng các thiết bị di động đã bị phá khóa, thay đổi/làm giả hệ điều hành để sử dụng ứng dụng Mobile Banking của Ngân hàng;`,
                    `&ensp- Thông báo kịp thời cho Ngân hàng khi phát hiện các giao dịch bất thường hoặc trường hợp như mất, thất lạc, hư hỏng thiết bị tạo OTP, số điện thoại nhận SMS đã đăng ký với Ngân hàng; bị lừa đảo hoặc nghi ngờ bị lừa đảo; bị tin tặc hoặc nghi ngờ bị tin tặc tấn công.`,
                    `&ensp- Thay đổi mật khẩu đăng nhập định kỳ theo hướng dẫn của hệ thống tối thiểu 3 tháng một lần hoặc khi bị lộ/nghi ngờ bị lộ thông tin truy cập.`,
                    `&ensp- Tuyệt đối không tiết lộ các thông tin truy cập, mật khẩu các loại, OTP… cho bất kỳ bên thứ ba nào khác`,
                ]
            },
            {
                title: 'Điều 7: Phí',
                content: [
                    `7.1 Phí dịch vụ, phí cấp token được quy định đầy đủ trong Biểu phí của Woori Bank Việt Nam và được công bố tại tất cả các chi nhánh và văn phòng giao dịch trên toàn quốc của Woori Bank Việt Nam.`,
                    `7.2 Phí dịch vụ và phí giao dịch có thể được thu trước hoặc sau khi phát sinh giao dịch và mức phí có thể khác nhau tùy thuộc vào từng loại giao dịch.`,
                    `7.3 Đối với loại phí mà Khách hàng ủy quyền cho Ngân hàng tự động thu, Ngân hàng sẽ ghi nợ khoản phí đó từ tài khoản đã đăng ký của Khách hàng. Nếu số dư tài khoản đã đăng ký không đủ để thanh toán phí, Ngân hàng sẽ ghi nợ bất kỳ tài khoản nào khác của Khách hàng để thanh toán phí hoặc tìm các biện pháp khác để giải quyết.`,
                    `7.4 Trong trường hợp có bất kỳ thay đổi nào về chính sách phí, Woori Bank Việt Nam sẽ thông báo cho Khách hàng tại các chi nhánh, văn phòng giao dịch trên toàn quốc hoặc công khai trên trang web chính thức của Ngân hàng.`,
                ]
            },
            {
                title: `Điều 8: Quyền và nghĩa vụ của Woori Bank Việt Nam`,
                content: [
                    `8.1 Quyền của Woori Bank Việt Nam`,
                    `&enspa. Woori Bank Việt Nam có quyền yêu cầu Khách hàng cung cấp thông tin cá nhân bao gồm thông tin điền vào đơn đăng ký, mẫu nhận dạng khách hàng và những người khác; để cung cấp mẫu chữ ký và con dấu; thông tin chuyển khoản, giao dịch, số dư tài khoản; vv và yêu cầu các tài liệu liên quan để xác minh thông tin đó.`,
                    `&enspb. Woori Bank Việt Nam có quyền dừng, thay đổi hoặc chấm dứt cung cấp dịch vụ cho Khách hàng trong trường hợp Khách hàng không tuân thủ các quy định của Ngân hàng Đăng ký và sử dụng dịch vụ Internet/Mobile Banking mà không có sự đồng ý của Khách hàng. Tuy nhiên, Ngân hàng sẽ thông báo trước cho Khách hàng trừ khi việc dừng, thay đổi, chấm dứt các điều khoản dịch vụ đó nằm ngoài tầm kiểm soát của Ngân hàng.`,
                    `&enspc. Woori Bank Việt Nam có quyền từ chối lệnh thanh toán hoặc yêu cầu của Khách hàng trong trường hợp: lệnh thanh toán thiếu thông tin, cơ sở để xử lý; nội dung của lệnh hoặc yêu cầu thanh toán là bất hợp pháp, không hợp lệ hoặc Ngân hàng có lý do để nghi ngờ rằng việc xử lý yêu cầu thanh toán hoặc yêu cầu đó sẽ trái pháp luật; số dư tài khoản không đủ để chuyển khoản và thanh toán phí cho mỗi lần chuyển hoặc chuyển khoản vượt quá giới hạn chuyển khoản; tài khoản thanh toán bị chặn hoặc bị đình chỉ do các lý do ngoài tầm kiểm soát của Ngân hàng; Khách hàng hoặc người thụ hưởng nằm trong danh sách nghi ngờ hoặc lệnh thanh toán cho thấy dấu hiệu lỗi theo Luật chống rửa tiền của Việt Nam.`,
                    `&enspd. Woori Bank Việt Nam có quyền thay đổi giao diện trang web, điều chỉnh phí giao dịch liên quan hoặc thay đổi các Điều khoản và điều kiện này bất cứ lúc nào mà không cần sự đồng ý của Khách hàng. Tuy nhiên, Ngân hàng phải thông báo trước cho Khách hàng bằng cách xử lý được quy định như thông qua trang web chính thức, qua dịch vụ ngân hàng SMS, tại các chi nhánh và quầy giao dịch hoặc bất kỳ phương thức liên lạc nào khác.`,
                    `&enspe. Woori Bank Việt Nam có quyền tự động ghi nợ tài khoản Khách hàng để thu phí dịch vụ mà Khách hàng đã đăng ký sử dụng theo Biểu Phí của Woori Bank hiện hành.`,
                    `&enspf. Woori Bank Việt Nam có quyền khóa Thiết bị bảo mật khi người dùng có dấu hiệu vi phạm và/hoặc vi phạm Các quy định của Ngân hàng; hoặc có dấu hiệu gian lận, làm sai lệch; hoặc theo yêu cầu của cơ quan nhà nước có thẩm quyền.`,
                    `&enspg. Woori Bank Việt Nam có quyền từ chối việc hủy lệnh thanh toán của Khách hàng đã được xử lý thành công. Tất cả các sửa đổi, thay đổi hoặc hủy bỏ lệnh thanh toán được yêu cầu bởi người lập hoặc người thụ hưởng hoặc cả hai phải được Ngân hàng chấp thuận. Trong trường hợp đó, Ngân hàng cam kết nỗ lực hỗ trợ Khách hàng nhưng sẽ không chịu trách nhiệm về việc các sửa đổi, thay đổi, hủy bỏ này có được thực hiện thành công hay không vì bất kỳ lý do nào. Woori Bank Việt Nam sẽ không chịu trách nhiệm cho bất kỳ tranh chấp nào giữa Khách hàng và người thụ hưởng liên quan đến lệnh thanh toán trong mọi trường hợp.`,
                    `8.2 Nghĩa vụ của Woori Bank Việt Nam`,
                    `&enspa. Woori Bank Việt Nam cam kết tuân thủ và đảm bảo quyền lợi của Khách hàng theo đúng các Điều khoản và điều kiện này.`,
                    `&enspb. Woori Bank Việt Nam đảm bảo rằng trong phạm vi kiểm soát của Ngân hàng, hệ thống cung cấp dịch vụ phải ổn định, an toàn và tuân thủ các quy định liên quan về cung cấp dịch vụ trực tuyến. Woori Bank Việt Nam cũng cam kết sẽ nỗ lực hết sức để phục hồi, sửa chữa hệ thống càng sớm càng tốt trong trường hợp có lỗi để tạo điều kiện thuận tiện nhất cho người dùng.`,
                    `&enspc. Woori Bank Việt Nam có trách nhiệm giữ bí mật thông tin của Khách hàng theo quy định tại Điều 5 của Điều khoản và điều kiện này.`,
                    `&enspd. Woori Bank Việt Nam cam kết thực hiện chính xác theo nội dung yêu cầu thanh toán của Khách hàng. Trong trường hợp từ chối xử lý lệnh thanh toán hoặc yêu cầu của Khách hàng, Ngân hàng phải thông báo trước cho Khách hàng theo cách thức quy định.`,
                    `&enspe. Woori Bank Việt Nam chịu trách nhiệm hỗ trợ, tư vấn, xử lý các yêu cầu của Khách hàng trong quá trình đăng ký và sử dụng dịch vụ của Khách hàng. Ngoài ra, Ngân hàng cung cấp các giải pháp kịp thời khi Ngân hàng nhận được thông báo bằng văn bản hợp lệ của Khách hàng về việc mất, tiết lộ, đánh cắp số điện thoại đã đăng ký, token, tên đăng nhập, mật khẩu, v.v.`,
                    `&enspf. Woori Bank Việt Nam có trách nhiệm tiếp nhận và nỗ lực hết sức để giải quyết các yêu cầu điều tra, khiếu nại và sửa đổi của Khách hàng, v.v. theo quy định.`,
                    `&enspg. Woori Bank Việt Nam chịu trách nhiệm về thiệt hại của khách hàng được tạo ra trực tiếp từ các hoạt động cố ý hoặc vô ý của Ngân hàng hoặc nhân viên ngân hàng khi cung cấp dịch vụ.`,
                    `&ensph. Woori Bank Việt Nam cam kết thông báo và trả lại số tiền giao dịch cho tài khoản gốc của Khách hàng trong trường hợp có lỗi hệ thống dẫn đến việc không chuyển được vào tài khoản của người thụ hưởng và ngân hàng người thụ hưởng.`,
                    `&enspi. Woori Bank Việt Nam chịu trách nhiệm thông báo cho Khách hàng theo quy định về thay đổi đối với các điều khoản và điều kiện này, hoặc bất kỳ sửa đổi, bổ sung, đình chỉ hoặc chấm dứt dịch vụ, hoặc bất kỳ điều chỉnh nào đối với phí dịch vụ liên quan khác.`,
                ]
            },
            {
                title: `Điều 9: Quyền và nghĩa vụ Khách hàng`,
                content: [
                    `8.1 Quyền của Woori Bank Việt Nam`,
                    `9.1 Quyền của khách hàng`,
                    `a. Sử dụng dịch vụ Internet/Mobile Banking của Woori Bank Việt Nam trong phạm vi đã đăng ký với Ngân hàng.`,
                    `&enspb. Khách hàng có quyền yêu cầu Ngân hàng đăng ký thay đổi, bổ sung dịch vụ, các Điều khoản và điều kiện này trong trường hợp cần thiết và trong trường hợp Khách hàng phát hiện các điều khoản bất lợi cho Khách hàng hoặc trái pháp luật.`,
                    `&enspc. Khách hàng có quyền yêu cầu Ngân hàng thay đổi token trong trường hợp hư hỏng, bị lỗi, cập nhật hoặc thay đổi thông tin sử dụng dịch vụ (bao gồm tên đăng nhập, mật khẩu và thông tin khác) theo quy định của Ngân hàng.`,
                    `&enspd. Khách hàng có quyền yêu cầu thay đổi, tạm ngưng hoặc chấm dứt sử dụng dịch vụ bất cứ lúc nào bằng cách gửi đơn đăng ký tới Ngân hàng. Yêu cầu của khách hàng có hiệu lực khi Ngân hàng nhận được yêu cầu và xử lý thành công.`,
                    `&enspe. Khách hàng có quyền gửi yêu cầu điều chỉnh, sửa đổi, hủy giao dịch, yêu cầu thanh toán đã thực hiện. Ngân hàng nỗ lực hết sức để tiếp nhận, tư vấn và xử lý yêu cầu của khách hàng trong phạm vi có thể của Ngân hàng và theo quy định.`,
                    `&enspf. Trường hợp khách hàng phát hiện ra bất kỳ sai sót hoặc lỗi trong xử lý giao dịch hoặc yêu cầu thanh toán do Ngân hàng thực hiện, Khách hàng có thể liên hệ trực tiếp với nhân viên chi nhánh của Ngân hàng tại quầy để làm rõ và giải quyết, bao gồm:`,
                    `&ensp&ensp- Bất kỳ sự chậm trễ hoặc sai sót nào trong việc xử lý yêu cầu thanh toán của khách hàng; hoặc`,
                    `&ensp&ensp- Thực hiện giao dịch không được thực hiện bởi Khách hàng; hoặc`,
                    `&ensp&ensp- Bất kỳ gian lận trong việc sử dụng dịch vụ; hoặc`,
                    `&ensp&ensp- Các vấn đề khác`,
                    `9.2 Nghĩa vụ của khách hàng`,
                    `&enspa. Khách hàng chịu trách nhiệm tuân thủ các điều khoản và điều kiện, thủ tục đăng ký, quy trình giao dịch và hướng dẫn khác từ Ngân hàng; sử dụng và quản lý tài khoản theo quy định; sử dụng thông tin được cung cấp trong dịch vụ đúng mục đích; gửi yêu cầu thanh toán trong hạn mức chuyển tiền cho phép.`,
                    `&enspb. Khách hàng có trách nhiệm cung cấp thông tin chính xác và đầy đủ theo yêu cầu của Ngân hàng để đăng ký và sử dụng dịch vụ Internet/Mobile Banking. Ngoài ra, Khách hàng có trách nhiệm thông báo cho Ngân hàng về bất kỳ thay đổi nào về thông tin trên. Khách hàng chấp nhận mọi rủi ro phát sinh do cung cấp thông tin không chính xác, không đầy đủ, không trung thực, không cập nhật.`,
                    `&enspc. Khách hàng chịu trách nhiệm giữ bí mật tên đăng nhập, mật khẩu, token do Ngân hàng cung cấp; đảm bảo rằng chỉ có Khách hàng mới có thể đăng nhập và sử dụng dịch vụ. Khách hàng thông báo ngay lập tức cho Ngân hàng khi phát hiện tên đăng nhập, mật khẩu; token bị mất, đánh cắp, tiết lộ.`,
                    `&enspd. Khách hàng chịu trách nhiệm về việc đăng nhập và sử dụng dịch vụ bằng tên đăng nhập và mật khẩu của Khách hàng. Mọi giao dịch, yêu cầu thanh toán được tạo từ người dùng Khách hàng đều được mặc định là do Khách hàng thực hiện ngay cả khi họ có thực sự thực hiện hay không.`,
                    `&enspe. Khách hàng chịu trách nhiệm chuẩn bị và chi trả chi phí cho các thiết bị, phần mềm, ứng dụng nhằm đảm bảo kết nối, đăng nhập an toàn vào hệ thống của Ngân hàng. Khách hàng có trách nhiệm bảo mật đối với dịch vụ Internet/Mobile Banking sử dụng mọi phương pháp phù hợp để đảm bảo tính ổn định và tương thích của tất cả các máy, thiết bị kết nối với hệ thống nhằm ngăn chặn, kiểm soát kết nối và sử dụng bất hợp pháp.`,
                    `&enspf. Khách hàng chịu trách nhiệm thanh toán đầy đủ và đúng hạn mọi khoản phí theo quy định của Ngân hàng liên quan đến việc sử dụng dịch vụ và xử lý giao dịch thông qua hệ thống Internet/Mobile Banking.`,
                    `&enspg. Khách hàng chịu trách nhiệm về chi phí, tổn thất, thiệt hại phát sinh do các giao dịch trái với các điều khoản và điều kiện này.`,
                    `&ensph. Khách hàng có trách nhiệm hợp tác với Ngân hàng để giải quyết mọi lỗi hoặc sự cố xảy ra trong quá trình sử dụng dịch vụ.`,
                    `&enspi. Đối với dịch vụ SMS Banking, Khách hàng đồng ý nhận tin nhắn có nội dung: thông báo về việc thay đổi số dư tài khoản đã đăng ký; thông báo mã OTP; quảng cáo sản phẩm, dịch vụ mới, khuyến mãi; thông báo khác liên quan đến giao dịch điện tử với Khách hàng.`,
                    `&enspj. Khách hàng chịu trách nhiệm bồi thường cho Ngân hàng trong trường hợp bị kiện, bị buộc tội, bị khiếu nại, bị phạt hoặc chịu trách nhiệm cho bất kỳ khoản phí nào khác liên quan đến việc sử dụng các dịch vụ bao gồm nhưng không giới hạn:`,
                    `&ensp&ensp- Tên đăng nhập, mật khẩu của Khách hàng bị bên thứ ba sử dụng trái phép;`,
                    `&ensp&ensp- Những điều khoản và điều kiện này bị vi phạm bởi Khách hàng;`,
                    `&ensp&ensp- Các thiết bị của khách hàng không được sử dụng hoặc sử dụng không đúng cách để kết nối với hệ thống do Ngân hàng cung cấp;`,
                    `&ensp&ensp- Bất kỳ lời buộc tội từ bên thứ ba từ các lý do trên.`,
                ]
            },
            {
                title: `Điều 10: Miễn trừ trách nhiệm`,
                content: [
                    `10.1 Woori Bank Việt Nam không chịu trách nhiệm về các thiệt hại, tổn thất của Khách hàng phát sinh trong quá trình sử dụng dịch vụ ngoại trừ các thiệt hại, tổn thất này được xác định là lỗi chủ quan của Ngân hàng.`,
                    `10.2 Woori Bank Việt Nam không chịu trách nhiệm đối với các thiệt hại trực tiếp hoặc gián tiếp đối với Khách hàng được tạo bởi:`,
                    `&enspa. Sử dụng dịch vụ hoặc nhận thông tin từ dịch vụ của những người được Khách hàng ủy quyền; hoặc`,
                    `&enspb. Tên đăng nhập, mật khẩu và/hoặc các yếu tố xác minh khác do Ngân hàng cung cấp bị tiết lộ, bị mất, bị đánh cắp dẫn đến việc bên thứ ba sử dụng/truy cập; hoặc`,
                    `&enspc. Khách hàng cung cấp thông tin không chính xác; hoặc`,
                    `&enspd. Tin nhắn SMS được gửi bởi bên thứ ba, bằng bất kỳ cách nào kết nối thiết bị của họ với số điện thoại đã đăng ký của Khách hàng; hoặc`,
                    `&enspe. Trì hoãn, chậm trễ, không thực hiện hoặc bất kỳ vấn đề nào khác xảy ra trong quá trình cung cấp dịch vụ do các lý do nằm ngoài sự kiểm soát hợp lý của Ngân hàng``, bao gồm nâng cấp, sửa chữa dịch vụ; lỗi truy cập đường truyền Internet; gián đoạn từ các nhà cung cấp dịch vụ của Ngân hàng; hoặc bất kỳ sự kiện bất khả kháng nào bao gồm nhưng không giới hạn như thiên tai, đình công; yêu cầu hoặc lệnh từ Chính phủ, cơ quan nhà nước, cơ quan có thẩm quyền khác.```,
                ]
            },
            {
                title: `Điều 11: Bổ sung, thay đổi Điều khoản và điều kiện`,
                content: [
                    `11.1 Woori Bank Việt Nam có thể thay đổi, cải thiện và bổ sung các điều khoản và điều kiện này mà không cần bất kỳ thỏa thuận nào từ Khách hàng. Tuy nhiên, Ngân hàng nên thông báo cho Khách hàng về việc bổ sung và thay đổi và ngày có hiệu lực theo cách riêng của mình. Nếu Khách hàng tiếp tục sử dụng dịch vụ sau ngày có hiệu lực mà không có yêu cầu nào khác, thì khách hàng hoàn toàn đồng ý với những thay đổi, cải tiến, bổ sung này;`,
                    `11.2 Thông báo thay đổi, cải tiến, bổ sung được xem là gửi đến Khách hàng thành công khi:`,
                    `&enspa. Thông báo này được tải lên các trang web chính thức của Ngân hàng tại https://www.woori.com.vn hoặc https://www.woori.vn; hoặc`,
                    `&enspb. Thông báo này được gửi đến địa chỉ email của Khách hàng được đăng ký với Ngân hàng; hoặc`,
                    `&enspc. Thông báo này được gửi đến địa chỉ mà Khách hàng đăng ký với Ngân hàng sau khi quy định thời gian gửi bưu điện; hoặc`,
                    `&enspd. Thông báo này được công bố tại các phòng giao dịch, chi nhánh của Woori Bank Việt Nam; hoặc`,
                    `&enspe. Thông báo này được gửi đến số điện thoại của khách hàng đã đăng ký với Ngân hàng.`,
                    `11.3 Trong trường hợp tăng tiện ích dịch vụ, Ngân hàng cần thông báo cho Khách hàng theo phương thức quy định trong 11.2. Nếu Khách hàng tiếp tục sử dụng dịch vụ, có nghĩa là Khách hàng hoàn toàn đồng ý với các tiện ích này và các điều khoản và điều kiện liên quan đến các tiện ích dịch vụ gia tăng đó.`,
                ]
            },
            {
                title: `Điều 12: Chấm dứt dịch vụ`,
                content: [
                    `12.1 Khách hàng có thể chấm dứt sử dụng dịch vụ Internet/Mobile Banking của Woori Bank Việt Nam bất cứ lúc nào bằng cách gửi yêu cầu bằng văn bản hoặc theo cách khác tới Ngân hàng theo quy định của Ngân hàng. Tuy nhiên, ngay cả khi chấm dứt dịch vụ, khách hàng vẫn chịu trách nhiệm và ràng buộc với các Điều khoản và điều kiện này trong phạm vi quyền và nghĩa vụ của khách hàng phát sinh trong quá trình sử dụng dịch vụ của khách hàng.`,
                    `12.2 Ngân hàng có thể tạm dừng dịch vụ ngay lập tức mà không cần thông báo trước cho khách hàng trong một trong các trường hợp sau:`,
                    `&enspa. Khách hàng vi phạm các điều khoản và điều kiện, cam kết đã ký với Ngân hàng;`,
                    `&enspb. Ngân hàng phát hiện ra tên đăng nhập, mật khẩu, token của Khách hàng bị tiết lộ cho bên thứ ba mà không được Khách hàng ủy quyền;`,
                    `&enspc. Ngân hàng tin tưởng một cách hợp lý rằng có thể có các giao dịch trái phép liên quan đến bất kỳ tài khoản nào của Khách hàng hoặc bất kỳ dịch vụ nào mà Khách hàng sử dụng;`,
                    `&enspd. Khách hàng mất khả năng thanh toán hoặc phá sản, hoặc tài sản của Khách hàng được kiểm soát hoặc trong quá trình thanh lý;`,
                    `&enspe. Ngân hàng nghi ngờ thẩm quyền của bất kỳ cá nhân nào khi người đó yêu cầu liên quan đến tài khoản Khách hàng hoặc khách hàng sử dụng dịch vụ.`,
                ],
            },
            {
                title: `Điều 13: Thực hiện cam kết và giải quyết tranh chấp`,
                content: [
                    `13.1 Khách hàng cam kết rằng họ đã đọc, hiểu và sẽ tuân thủ nghiêm ngặt tất cả các Điều khoản và Điều kiện này và mọi sửa đổi, bổ sung, phụ lục của chúng (nếu có). Ngoài ra, các giao dịch qua dịch vụ Internet/Mobile Banking của Woori Bank Việt Nam cần được quy định cho Ứng dụng mở và sử dụng tài khoản mà Khách hàng ký với Ngân hàng và các quy định liên quan khác của pháp luật Việt Nam.`,
`13.2 Trong trường hợp tranh chấp phát sinh trong quá trình thực hiện, hai bên đồng ý giải quyết tốt nhất bằng cách thương lượng hoặc hòa giải. Trong trường hợp không thể giải quyết bằng thương lượng hoặc hòa giải, các bên có quyền đưa ra tranh chấp cho Tòa án có thẩm quyền.`,
                ],
            },
            {
                title: `Điều 14: Luật áp dụng`,
                content: [
                    `Các Điều khoản và điều kiện này được điều chỉnh bởi và sẽ được hiểu theo luật pháp hiện hành của Việt Nam. Các Điều khoản và điều kiện này được lập thành các bản tiếng Việt, tiếng Anh và tiếng Hàn. Trong trường hợp có sự khác biệt giữa phiên bản tiếng Việt, tiếng Anh và tiếng Hàn, phiên bản tiếng Việt sẽ được áp dụng.`
                ],
            }
        ]
    },
    ko: {
        ko: ''
    },
    en: {
        en: ''
    }
}