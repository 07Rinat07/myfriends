import { createRoot, createRef } from "@wordpress/element";
/**
 * External dependencies
 */

import Slider from "react-slick";

window.addEventListener("DOMContentLoaded", (event) => {
    const wrappers = document.getElementsByClassName(`eb-slider-wrapper`);

    for (let wrapper of wrappers) {
        let version = wrapper.getAttribute("data-version");

        if (version == null || version === 'v1') {
            let settings = JSON.parse(wrapper.getAttribute("data-settings"));
            let images = JSON.parse(wrapper.getAttribute("data-images"));
            let sliderContentType = wrapper.getAttribute("data-sliderContentType");
            let sliderType = wrapper.getAttribute("data-sliderType");
            let textAlign = wrapper.getAttribute("data-textAlign");
            let arrowNextIcon = wrapper.getAttribute("data-arrowNextIcon");
            let arrowPrevIcon = wrapper.getAttribute("data-arrowPrevIcon");
            let TitleTag = wrapper.getAttribute("data-titleTag") || 'h2';
            let ContentTag = wrapper.getAttribute("data-contentTag") || 'p';

            const slider = createRef();

            const SampleNextArrow = (props) => {
                const { className, style, onClick, arrowNextIcon } = props;
                return (
                    <div
                        className={className}
                        style={{ ...style, display: "block" }}
                        onClick={onClick}
                    >
                        <i aria-hidden="true" className={arrowNextIcon}></i>
                    </div>
                );
            }

            const SamplePrevArrow = (props) => {
                const { className, style, onClick, arrowPrevIcon } = props;
                return (
                    <div
                        className={className}
                        style={{ ...style, display: "block" }}
                        onClick={onClick}
                    >
                        <i aria-hidden="true" className={arrowPrevIcon}></i>
                    </div>
                );
            }

            settings.nextArrow = <SampleNextArrow arrowNextIcon={arrowNextIcon} />;
            settings.prevArrow = <SamplePrevArrow arrowPrevIcon={arrowPrevIcon} />;

            const sliderTypeClass = sliderType === 'content' ? 'eb-slider-type-content' : 'eb-slider-type-image';

            const SliderComponent = () => (
                <Slider
                    ref={slider}
                    {...settings}
                    key={`${settings.autoplay}-${settings.adaptiveHeight}`}
                    className={sliderTypeClass}
                >
                    {images.map((image) => (
                        <div className={`eb-slider-item ${sliderContentType}`}>
                            {sliderType === "image" &&
                                image.buttonUrl &&
                                image.isValidUrl && (
                                    <>
                                        <a
                                            href={
                                                image.buttonUrl && image.isValidUrl
                                                    ? image.buttonUrl
                                                    : "#"
                                            }
                                            target={
                                                image.openNewTab
                                                    ? "_blank"
                                                    : "_self"
                                            }
                                            rel="noopener"
                                        >
                                            <img
                                                className="eb-slider-image"
                                                src={image.url}
                                                alt={
                                                    image.alt
                                                        ? image.alt
                                                        : image.title
                                                }
                                            />
                                        </a>
                                    </>
                                )}
                            {sliderType === "image" &&
                                !image.buttonUrl &&
                                !image.isValidUrlf && (
                                    <img
                                        className="eb-slider-image"
                                        src={image.url}
                                        alt={image.alt ? image.alt : image.title}
                                    />
                                )}
                            {sliderType === "content" && (
                                <>
                                    <img
                                        className="eb-slider-image"
                                        src={image.url}
                                        alt={image.alt ? image.alt : image.title}
                                    />
                                    <div
                                        className={`eb-slider-content align-${textAlign}`}
                                    >
                                        {image.title && image.title.length > 0 && (
                                            <>
                                                <TitleTag
                                                    className="eb-slider-title"
                                                    dangerouslySetInnerHTML={{
                                                        __html: image.title,
                                                    }}
                                                ></TitleTag>
                                            </>

                                        )}
                                        {image.subtitle &&
                                            image.subtitle.length > 0 && (
                                                <ContentTag
                                                    className="eb-slider-subtitle"
                                                    dangerouslySetInnerHTML={{
                                                        __html: image.subtitle,
                                                    }}
                                                ></ContentTag>
                                            )}
                                        <div className="eb-slider-button-wrapper">
                                            {image.showButton &&
                                                image.buttonText &&
                                                image.buttonText.length > 0 && (
                                                    <a
                                                        href={
                                                            image.buttonUrl &&
                                                                image.isValidUrl
                                                                ? image.buttonUrl
                                                                : "#"
                                                        }
                                                        className="eb-slider-button"
                                                        target={
                                                            image.openNewTab
                                                                ? "_blank"
                                                                : "_self"
                                                        }
                                                        rel="noopener"
                                                        dangerouslySetInnerHTML={{
                                                            __html:
                                                                image.buttonText,
                                                        }}
                                                    ></a>
                                                )}

                                            {image.showSecondButton &&
                                                image.secondButtonText &&
                                                image.secondButtonText.length >
                                                0 && (
                                                    <a
                                                        href={
                                                            image.secondButtonUrl &&
                                                                image.isValidUrl
                                                                ? image.secondButtonUrl
                                                                : "#"
                                                        }
                                                        className="eb-slider-second-button"
                                                        target={
                                                            image.secondButtonOpenNewTab
                                                                ? "_blank"
                                                                : "_self"
                                                        }
                                                        rel="noopener"
                                                        dangerouslySetInnerHTML={{
                                                            __html:
                                                                image.secondButtonText,
                                                        }}
                                                    ></a>
                                                )}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </Slider>
            );

            const rootElement = document.getElementsByClassName('eb-slider-wrapper')[0];
            if (rootElement) {
                const root = createRoot(rootElement);
                root.render(<SliderComponent />);
            }
        }

        if (version === 'v2') {
            let blockId = wrapper.getAttribute("data-blockid").replaceAll("-", "_");
            let settings = window[`${blockId}`];
            let arrowNextIcon = wrapper.getAttribute("data-arrowNextIcon");
            let arrowPrevIcon = wrapper.getAttribute("data-arrowPrevIcon");
            let showLightbox = wrapper.getAttribute("data-lightbox");

            settings.prevArrow = `<div class="slick-prev"><i aria-hidden="true" class="${arrowPrevIcon}"></i></div>`;
            settings.nextArrow = `<div class="slick-next"><i aria-hidden="true" class="${arrowNextIcon}"></i></div>`;

            let slickType = wrapper.querySelector('.eb-slider-init');

            (function ($) {
                $(slickType).slick(settings);

                if (showLightbox == 'true') {
                    $(slickType).slickLightbox({
                        src: 'data-src',
                        itemSelector: '.eb-slider-item',
                        navigateByKeyboard: true,
                        imageMaxHeight: 0.7,
                    });
                }

            })(jQuery);
        }
        if (version === 'v3') {
            let settingsData = atob(wrapper.getAttribute("data-settings"));
            let settings = JSON.parse(settingsData);

            let adaptiveHeight = settings.adaptiveHeight;
            let arrows = settings.arrows;
            let autoplay = settings.autoplay;
            let dots = settings.dots;
            let infinite = settings.infinite;
            let pauseOnHover = settings.pauseOnHover;
            let slideToShowRange = settings.slidesToShow;
            let responsive = settings.responsive
            let autoplaySpeed = settings.autoplaySpeed;
            let speed = settings.speed;

            let arrowNextIcon = wrapper.getAttribute("data-arrowNextIcon");
            let arrowPrevIcon = wrapper.getAttribute("data-arrowPrevIcon");
            let showLightbox = wrapper.getAttribute("data-lightbox");

            let slickType = wrapper.querySelector('.eb-slider-init');

            (function ($) {
                $(slickType).slick({
                    arrows,
                    autoplay,
                    dots,
                    infinite,
                    pauseOnHover,
                    slidesToShow: slideToShowRange,
                    autoplaySpeed,
                    speed,
                    adaptiveHeight,
                    prevArrow: `<div class="slick-prev"><i aria-hidden="true" class="${arrowPrevIcon}"></i></div>`,
                    nextArrow: `<div class="slick-next"><i aria-hidden="true" class="${arrowNextIcon}"></i></div>`,
                    responsive: [...responsive],
                });

                if (showLightbox == 'true') {
                    $(slickType).slickLightbox({
                        src: 'data-src',
                        itemSelector: '.eb-slider-item',
                        navigateByKeyboard: true,
                        imageMaxHeight: 0.7,
                    });
                }

            })(jQuery);
        }
    }
});