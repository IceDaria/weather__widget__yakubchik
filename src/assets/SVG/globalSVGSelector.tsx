import React from 'react'

interface Props {
    id: string;
}

export const globalSVGSelector = ({ id }: Props) => {
    switch (id) {
        case 'header_logo':
            return (
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" fill='#CDF5FF'>
                <path fill="#CDF5FF" d="M512,256c0,141.385-114.615,256-256,256S0,397.385,0,256S114.615,0,256,0S512,114.615,512,256z"></path>
                <path fill="#FFF573" d="M436.574,256c0,99.728-80.846,180.574-180.574,180.574S75.426,355.728,75.426,256 S156.272,75.426,256,75.426S436.574,156.272,436.574,256z"></path>
                <path fill="#FFE13C" d="M356.574,256c0,55.546-45.029,100.574-100.574,100.574S155.426,311.546,155.426,256 S200.454,155.426,256,155.426S356.574,200.454,356.574,256z"></path>
                <path fill="#F2C230" d="M350.343,290.917C336.15,329.25,299.267,356.574,256,356.574 c-55.545,0-100.574-45.029-100.574-100.574c0-43.268,27.324-80.15,65.657-94.344c-4.027,10.878-6.231,22.64-6.231,34.918 c0,55.545,45.029,100.574,100.574,100.574C327.704,297.148,339.466,294.944,350.343,290.917z"></path>
                <path fill="#B4EBFF" d="M1.819,286.528C31.711,263.619,69.094,250,109.667,250l0,0c70.808,0,131.915,41.469,160.407,101.436 h40.802c57.279,0,105.795,37.494,122.363,89.275C387.24,484.86,324.792,512,256,512C124.947,512,16.912,413.519,1.819,286.528z"></path>
                <path fill="#E6FAFF" d="M439.333,365.246L439.333,365.246c0,13.672-11.083,24.754-24.755,24.754h-50.615H295.37h-50.615 C231.083,390,220,378.917,220,365.246l0,0c0-23.6,19.132-42.733,42.733-42.733h13.573c9.478-19.949,29.806-33.744,53.361-33.744l0,0 c23.555,0,43.883,13.795,53.361,33.744h13.573C420.201,322.513,439.333,341.645,439.333,365.246z"></path>
                <path fill="#6CD0F5" d="M290,502.673c0,2.431-0.185,4.818-0.538,7.15C278.51,511.253,267.342,512,256,512 c-100.427,0-187.332-57.837-229.264-142.011c15.946-8.622,34.196-13.527,53.597-13.527l0,0c45.034,0,83.898,26.374,102.018,64.513 h25.95C253.422,420.975,290,457.552,290,502.673z"></path>
            </svg>   
            );

            case 'search':
                return (
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                        width="611.997px" height="611.997px" viewBox="0 0 611.997 611.997">
                        <g>
                            <path d="M558.675,601.59L558.675,601.59c-8.438,0-15.965-2.785-21.81-7.969L360.263,435.989
                                c-38.188,25.395-82.221,38.768-128.074,38.768C104.142,474.784,0,370.586,0,242.567S104.142,10.407,232.188,10.407
                                s232.188,104.142,232.188,232.161c0,44.254-12.49,86.937-36.203,124.214l173.184,154.572c15.661,14.061,13.841,40.889-4.191,61.156
                                C586.468,594.475,572.075,601.59,558.675,601.59z M361.311,404.667c3.281,0,6.562,1.186,9.182,3.502l184.736,164.883
                                c0.882,0.773,2.371,0.965,3.446,0.965l0,0c4.163,0,11.388-2.619,17.895-9.871c8.603-9.65,9.017-19.879,6.369-22.25L400.822,379.327
                                c-5.239-4.688-6.121-12.572-2.041-18.279c24.871-34.908,38.022-75.88,38.022-118.507c0-112.827-91.788-204.588-204.615-204.588
                                S27.573,129.741,27.573,242.567c0,112.855,91.789,204.644,204.616,204.644c43.647,0,85.475-13.787,120.961-39.871
                                C355.575,405.549,358.443,404.667,361.311,404.667z M232.188,408.967c-91.762,0-166.4-74.639-166.4-166.4s74.639-166.4,166.4-166.4
                                c91.761,0,166.4,74.639,166.4,166.4S323.949,408.967,232.188,408.967z M232.188,103.74c-76.542,0-138.828,62.286-138.828,138.828
                                c0,76.541,62.286,138.828,138.828,138.828c76.541,0,138.827-62.287,138.827-138.828C371.016,166.026,308.729,103.74,232.188,103.74
                                z"/>
                            </g><g>
                        </g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                    </svg>
                );
    
        default:
            return null;
    }
}