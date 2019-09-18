function youtubeIframe() {

	let youtubeBlock = document.querySelectorAll( "#youtube" );
	
	for (var i = 0; i < youtubeBlock.length; i++) {
		
		let source = "https://img.youtube.com/vi/"+ youtubeBlock[i].dataset.embed +"/hqdefault.jpg";
        let image = new Image();
				image.src = source;
				image.alt = 'Р¤РѕРЅ РєР°СЂС‚РёРЅРєРё';
				image.setAttribute('data-src', source);
				image.addEventListener( "load", function() {
					youtubeBlock[ i ].appendChild( image );
				}( i ) );
				youtubeBlock[i].addEventListener( "click", function() {

					let iframe = document.createElement( "iframe" );

							iframe.setAttribute( "frameborder", "0" );
							iframe.setAttribute( "allowfullscreen", "" );
							iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );

							this.innerHTML = "";
							this.appendChild( iframe );
				} );	
	};
	
};

window.onload = function() {
    youtubeIframe();
}