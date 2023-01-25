import styled, { keyframes } from "styled-components";

const gradientEffect = keyframes`
  50% {
    opacity: 0.5;
  }
`;

const StyledSkeleton = styled.div`
  & > * {
    transition: 1s;
    background-color: #828282;
    animation: 2s ${gradientEffect} infinite;
  }
`;

const Skeleton = (props) => {
  return <StyledSkeleton>{props.Component}</StyledSkeleton>;
};

export default function App() {
  return (
    <SkeletonTheme>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        <Skeleton
          Component={
            <div style={{ width: 340, height: 204, borderRadius: 3 }} />
          }
        />
        <Skeleton
          Component={
            <div style={{ width: 137, height: 26, borderRadius: 3 }} />
          }
        />
        <Skeleton
          Component={
            <div style={{ width: 305, height: 42, borderRadius: 3 }} />
          }
        />
      </div>
    </SkeletonTheme>
  );
}

const SkeletonTheme = styled.div`
  padding: 20px 24px;
`;
