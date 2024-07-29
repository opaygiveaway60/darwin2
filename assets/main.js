// all references are relative to the root directory
// (where index.html is located)

// ------------------------------ START EDIT ------------------------------ //
const settings = {
	"telegram": "http://t.me/BSCDarwinToken", // #telegram_link
	"twitter": "https://twitter.com/BSCDarwinToken", // #twitter_link
	"whitepaper": "./whitepaper.pdf", // #whitepaper_link

	"pinksale": "", // #pinksale_link
	"pancakeswap": "", // #pancakeswap_link
	"poocoin": "", // #poocoin_link
	"dexview": "", // #dexview_link
	"bscscan": "", // #bscscan_link

	// Colors should be edited in css/uicore-global.css file (first lines!)

	// Pictures can be modified in /images
	// only change main_pic.png, second_pic.png, third_pic.png, logo.png
	// to use a different picture just rename it to the names mentioned above!

	"email": "token@darwin.com",

	"headline_1_top": "$DARWIN",
	"headline_1_bottom": "TOKEN",
	"description_1": "$DARWIN: You thought you could drag me to the bottom of the lake so you can eat me later. But guess what punk. I'M A FISH. WITH LEGS.",

	"headline_2": "About $DARWIN Token",
	"description_2": "$DARWIN is a thrilling and nostalgia-inducing token that brings the classic television series to the world of cryptocurrencies. With its innovative blockchain technology, Darwin Token offers secure and transparent transactions. Join the community of cartoon enthusiasts, trade tokens, and compete for high scores. Experience the fusion of creativity and crypto with Darwin Token, where nostalgia meets the future.",

	"headline_3_top": "$DARWIN: The future of crypto, and there is no body better to take the role other than Darwin",
	"headline_3_bottom": "Hold, Stake, Earn: Darwin Token - Where Cartoons and Cryptocurrency Collide for Endless Fun and Rewards!",
	"description_3_first_headline": "Community Experience",
	"description_3_first": "Holding Darwin Token allows you to actively participate in the thriving community, reliving the nostalgia of the televesion series \”The Amazing Wolrd Of Gumball\” and immersing yourself in the thrilling plans we have to offer. You can enjoy the fun and excitement of holding Darwin Token while also benefiting from the potential rewards of the token.",
	"description_3_second_headline": "Potential Value Growth",
	"description_3_second": "By holding Darwin Token, you are preparing yourself for something new and exciting and will have the opportunity to benefit from potential value growth. As the token gains popularity and demand increases, its market value may rise, potentially resulting in a higher return on your investment.",
	"description_3_third_headline": "Benefits and Rewards",
	"description_3_third": " Holding Darwin Token enables you to become part of a vibrant community of cartoon and cryptocurrency enthusiasts. You can engage in discussions, participate in events, and potentially earn rewards based on your involvement and contribution to the community.",

	"token_name": "Token Name: Darwin",
	"token_symbol": "Token Symbol: $DARWIN",
	"total_supply": "Total Supply: 1,000,000,000 $DARWIN",

	// can have unlimited items in phase_1, phase_2, phase_3
	// make sure the text is in between "" and each line is delimited by ,
	"phase_1": [
		"Launch Of $DARWIN Token",
		"Listing On Exchanges",
		"Surprise Integration",
		"Community Expansion",
		],
	"phase_2": [
		"Long Term Vision",
		"Continued Development",
		"Mainstream Adoption",		
		],
	"phase_3": [
		"Devlop Incentives",
		"Partnerhsip And Collaborations",
		"User Education and Onboarding",
		"Community-Driven Growth",
		],

	"end_description": "Level up your crypto adventure with Darwin Token, the ultimate fusion of cartoon nostalgia and blockchain innovation!",

	"copyright_name": "Copyright © 2023 DARWIN TOKEN",

}

// ------------------------------ STOP EDIT ------------------------------ //

window.onload = (event) => {
	init_elems()
};

function init_elems() {
	$('[id=telegram_link]').each(function() {
        $(this).attr('href', settings.telegram);
    });

    $('[id=whitepaper_link]').each(function() {
        $(this).attr('href', settings.whitepaper);
    });

    $('[id=pinksale_link]').attr('href', settings.pinksale);
    $('[id=pancakeswap_link]').attr('href', settings.pancakeswap);
    $('[id=poocoin_link]').attr('href', settings.poocoin);
    $('[id=dexview_link]').attr('href', settings.dexview);
    $('[id=bscscan_link]').each(function() {
        $(this).attr('href', settings.bscscan);
    });

    $('[id=twitter_link]').attr('href', settings.twitter);

    $('[id=email]').text(settings.email);

    $('[id=headline_1_top]').text(settings.headline_1_top);
    $('[id=headline_1_bottom]').text(settings.headline_1_bottom);
    $('[id=description_1]').text(settings.description_1);

    $('[id=headline_2]').text(settings.headline_2);
    $('[id=description_2]').text(settings.description_2);

    $('[id=headline_3_top]').text(settings.headline_3_top);
    $('[id=headline_3_bottom]').text(settings.headline_3_bottom);
    $('[id=description_3_first_headline]').text(settings.description_3_first_headline);
    $('[id=description_3_first]').text(settings.description_3_first);
    $('[id=description_3_second_headline]').text(settings.description_3_second_headline);
    $('[id=description_3_second]').text(settings.description_3_second);
    $('[id=description_3_third_headline]').text(settings.description_3_third_headline);
    $('[id=description_3_third]').text(settings.description_3_third);

    $('[id=token_name]').text(settings.token_name);
    $('[id=token_symbol]').text(settings.token_symbol);
    $('[id=total_supply]').text(settings.total_supply);

    var p_1 = $('[id=phase_1]')
    var p_2 = $('[id=phase_2]')
    var p_3 = $('[id=phase_3]')
    for (var item of settings.phase_1) {
    	p_1.append('<li class="elementor-icon-list-item"> <span class="elementor-icon-list-icon"> <i aria-hidden="true" class="fas fa-stop-circle"></i>						</span> <span class="elementor-icon-list-text"> ' + item + '</span> </li>')
    }
    for (var item of settings.phase_2) {
    	p_2.append('<li class="elementor-icon-list-item"> <span class="elementor-icon-list-icon"> <i aria-hidden="true" class="fas fa-stop-circle"></i>						</span> <span class="elementor-icon-list-text"> ' + item + '</span> </li>')
    }
    for (var item of settings.phase_3) {
    	p_3.append('<li class="elementor-icon-list-item"> <span class="elementor-icon-list-icon"> <i aria-hidden="true" class="fas fa-stop-circle"></i>						</span> <span class="elementor-icon-list-text"> ' + item + '</span> </li>')
    }

    $('[id=end_description]').text(settings.end_description);

    $('[id=copyright_name]').text(settings.copyright_name);
}